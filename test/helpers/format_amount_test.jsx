import { formatAmount } from '../../src'

describe('formatAmount', () => {
  it('formats cent amounts with rounding', () => {
    expect(formatAmount({cents: 99999})).toMatch(/(1[.,]000\s€|€\s1[.,]000)/)
  })
})
