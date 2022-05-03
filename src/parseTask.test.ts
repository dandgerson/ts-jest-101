import { translate } from './parseTask'

// - [x] 1. Write a test to make sure we can translate d to half dev day
// - [x] 2. Write a test to make sure we can translate D to one dev day
// - [x] 3. Write a test to handle more than one make like dD
// - [x] 4. Write a test to handle q.
// - [x] 5. Write a test to handle qQ
// - [x] 6. Write a test to handle dddQ

describe('parseTask', () => {
  it('translate d to half dev day', () => {
    expect(translate('d')).toEqual(expect.objectContaining({ 'Dev': 0.5 }))
  })

  it('translate D to one dev day', () => {
    expect(translate('D')).toEqual(expect.objectContaining({ 'Dev': 1.0 }))
  })

  it('handle more than one make like dD', () => {
    expect(translate('dD')).toEqual(expect.objectContaining({ 'Dev': 1.5 }))
  })

  it('translate q to half qa day', () => {
    expect(translate('q')).toEqual(expect.objectContaining({ 'QA': 0.5 }))
  })

  it('handle more than one make like qQ', () => {
    expect(translate('qQ')).toEqual(expect.objectContaining({ 'QA': 1.5 }))
  })

  it('handle more than one make like ddQ', () => {
    expect(translate('dddQ')).toEqual(expect.objectContaining({
      'Dev': 1.5,
      'QA': 1,
    }))
  })
})
