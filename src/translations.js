import I18n from 'i18n-js'
global.I18n = global.I18n || I18n

I18n.locale = document.documentElement.lang || 'de'
I18n.translations = I18n.translations || {}

// pass existing translations as second arg so that they are not overridden
I18n.translations = I18n.extend({
  de: {
    bp_project_teaser: {
      values_donor_count: "Spenden",
      values_open_amount_in_cents: "fehlen noch"
    }
  },
  en: {
    bp_project_teaser: {
      values_donor_count: "donations",
      values_open_amount_in_cents: "still needed"
    }
  }
}, I18n.translations)
