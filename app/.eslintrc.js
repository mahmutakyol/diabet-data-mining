module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': [
      process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ? 2 : 0,
      { allow: ['error'] }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ? 2 : 0,
    'vue/require-v-for-key': 'off',
    'camelcase': 'off',
    'indent': [
      'error',
      2,
      {
        'ignoredNodes': [
          'TemplateLiteral'
        ]
      }
    ],
    'template-curly-spacing': [
      'off'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
