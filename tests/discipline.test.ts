import assert from 'node:assert/strict'
import test from 'node:test'
import { DEFAULT_STATE, evaluateGate } from '../src/discipline'

test('bloquea cuando todavía hay pasos pendientes', () => {
  const result = evaluateGate(DEFAULT_STATE)

  assert.equal(result.ready, false)
  assert.equal(result.completed, 1)
  assert.equal(result.total, 3)
  assert.match(result.reasons.join(' '), /1 de 3/)
})
test('permite avanzar cuando el resultado y los pasos están completos', () => {
  const result = evaluateGate({
    ...DEFAULT_STATE,
    steps: DEFAULT_STATE.steps.map((step) => ({ ...step, done: true })),
  })

  assert.equal(result.ready, true)
  assert.deepEqual(result.reasons, [])
})

test('bloquea un resultado ambiguo aunque los pasos estén completos', () => {
  const result = evaluateGate({
    outcome: 'Terminar',
    steps: DEFAULT_STATE.steps.map((step) => ({ ...step, done: true })),
  })

  assert.equal(result.ready, false)
  assert.match(result.reasons.join(' '), /resultado concreto/)
})
