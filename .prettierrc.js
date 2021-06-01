module.exports = {
  arrowParens: 'always',
  printWidth: 120,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.json', '*.yml', '*.md'],
      options: {
        tabWidth: 2,
      },
    },
  ],
}
