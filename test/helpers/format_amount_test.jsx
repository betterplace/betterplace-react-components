import { formatAmount } from '../../src'

describe('formatAmount', () => {
  it('formats cent amounts with rounding', () => {
    I18n.locale = 'de'
    expect(formatAmount({cents: 99999})).toMatch(/1\.000\D/)
  })
})
