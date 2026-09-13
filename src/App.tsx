import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { DEFAULT_STATE, evaluateGate, type ProjectState } from './discipline'

const STORAGE_KEY = 'tad-web-lite-project-v1'

function loadState(): ProjectState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return DEFAULT_STATE

    const parsed = JSON.parse(saved) as Partial<ProjectState>
    if (typeof parsed.outcome !== 'string' || !Array.isArray(parsed.steps)) {
      return DEFAULT_STATE
    }

    const steps = parsed.steps.filter(
      (step): step is ProjectState['steps'][number] =>
        typeof step?.id === 'string' &&
        typeof step?.label === 'string' &&
        typeof step?.done === 'boolean',
    )

    return steps.length === 3 ? { outcome: parsed.outcome, steps } : DEFAULT_STATE
  } catch {
    return DEFAULT_STATE
  }
}

function App() {
  const [project, setProject] = useState<ProjectState>(loadState)
  const gate = useMemo(() => evaluateGate(project), [project])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(project))
  }, [project])

  function toggleStep(id: string) {
    setProject((current) => ({
      ...current,
      steps: current.steps.map((step) =>
        step.id === id ? { ...step, done: !step.done } : step,
      ),
    }))
  }

  function resetProject() {
    localStorage.removeItem(STORAGE_KEY)
    setProject(DEFAULT_STATE)
  }

  return (
    <main className="workbench">
      <aside className="intro" aria-labelledby="page-title">
        <div className="brand-mark" aria-hidden="true">TAD</div>
        <div>
          <p className="product-name">The App Discipline Web Lite</p>
          <h1 id="page-title">Haz una cosa pequeña. Compruébala. Luego avanza.</h1>
          <p className="intro-copy">
            Este ejercicio guarda el contexto mínimo de una tarea y convierte el avance en una condición visible.
          </p>
        </div>
        <a className="text-link" href="https://theappdiscipline.gumroad.com/l/tad">
          Conocer el sistema completo
        </a>
      </aside>

      <section className="workspace" aria-label="Ejercicio de planificación">
        <header className="workspace-header">
          <div>
            <p className="section-label">Resultado</p>
            <p className="section-help">Una frase que diga qué estará terminado.</p>
          </div>
          <button className="quiet-button" type="button" onClick={resetProject}>
            Reiniciar ejercicio
          </button>
        </header>

        <label className="outcome-field">
          <span className="sr-only">Resultado esperado</span>
          <textarea
            value={project.outcome}
            onChange={(event) => setProject((current) => ({
              ...current,
              outcome: event.target.value,
            }))}
            rows={3}
          />
        </label>

        <div className="steps-block">
          <div className="steps-heading">
            <div>
              <p className="section-label">Tres pasos</p>
              <p className="section-help">Marca cada paso cuando tengas evidencia real.</p>
            </div>
            <p className="count" aria-live="polite">{gate.completed}/{gate.total}</p>
          </div>

          <ol className="steps-list">
            {project.steps.map((step, index) => (
              <li key={step.id}>
                <button
                  className="step-button"
                  type="button"
                  aria-pressed={step.done}
                  onClick={() => toggleStep(step.id)}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-text">{step.label}</span>
                  <span className="step-state">{step.done ? 'Hecho' : 'Pendiente'}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <section
          className={`gate ${gate.ready ? 'gate-ready' : 'gate-blocked'}`}
          aria-live="polite"
          aria-labelledby="gate-title"
        >
          <div className="gate-signal" aria-hidden="true" />
          <div>
            <p className="section-label">Gate</p>
            <h2 id="gate-title">{gate.ready ? 'Puedes avanzar' : 'Todavía no avances'}</h2>
            {gate.ready ? (
              <p>El resultado está definido y los tres pasos están completos.</p>
            ) : (
              <ul>
                {gate.reasons.map((reason) => <li key={reason}>{reason}</li>)}
              </ul>
            )}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
