export type Step = {
  id: string
  label: string
  done: boolean
}
export type ProjectState = {
  outcome: string
  steps: Step[]
}

export type GateResult = {
  ready: boolean
  completed: number
  total: number
  reasons: string[]
}

export const DEFAULT_STATE: ProjectState = {
  outcome: 'Publicar una página sencilla que pueda explicar en una frase.',
  steps: [
    { id: 'scope', label: 'Definir el resultado', done: true },
    { id: 'build', label: 'Construir una versión pequeña', done: false },
    { id: 'verify', label: 'Verificar antes de avanzar', done: false },
  ],
}

export function evaluateGate(state: ProjectState): GateResult {
  const outcome = state.outcome.trim()
  const validSteps = state.steps.filter((step) => step.label.trim().length > 0)
  const completed = validSteps.filter((step) => step.done).length
  const reasons: string[] = []

  if (outcome.length < 12) {
    reasons.push('Describe un resultado concreto de al menos 12 caracteres.')
  }

  if (validSteps.length < 3) {
    reasons.push('Conserva tres pasos concretos.')
  }

  if (completed !== validSteps.length) {
    reasons.push(`Completa los pasos pendientes: ${completed} de ${validSteps.length}.`)
  }

  return {
    ready: reasons.length === 0,
    completed,
    total: validSteps.length,
    reasons,
  }
}
