module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  env: {
    es2022: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      'version': '18.2'
    }
  },
  plugins: [
    'import',
    'react',
    'react-hooks'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'dot-location': ['error', 'property'],
    'indent': ['error', 2, { 'SwitchCase': 1, 'ignoredNodes': ['JSXOpeningElement'] }],
    'no-console': ['error'],
    'no-extra-parens': ['error', 'all', { 'nestedBinaryExpressions': false, 'ignoreJSX': 'all' }],
    'no-implicit-coercion': ['error', { 'allow': ['!!', '~'] }],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    'no-var': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', { 'consistent': true }],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'prefer-const': ['error'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    'quotes': ['error', 'single'],
    'import/extensions': ['error', 'ignorePackages'],
    'import/no-unresolved': ['error', { 'ignore': ['^vitest/config$'] }],
    'react/jsx-closing-bracket-location': [1, 'props-aligned'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': ['error', { 'eventHandlerPrefix': '(handle)', 'eventHandlerPropPrefix': '(on|before|after)' }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'multiline' }],
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error']
  }
};
