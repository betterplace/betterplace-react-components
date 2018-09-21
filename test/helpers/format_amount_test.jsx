import { formatAmount } from '../../src'

describe('formatAmount', () => {
  it('formats cent amounts with rounding', () => {
    expect(formatAmount({cents: 99999})).toMatch(/(1[.,]000\s?€|€\s?1[.,]000)/)
  })

  it('includes 2 fraction digits for showCents: true', () => {
    expect(formatAmount({cents: 99999, showCents: true})).toMatch(/999[.,]99/)
    expect(formatAmount({cents: 100, showCents: true})).toMatch(/1[.,]00/)
  })
})
