module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['react', 'prettier', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['components', './components'],
          ['containers', './containers'],
          ['screens', './screens'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'no-plusplus': 0,
    'max-classes-per-file': 0,
    'react/no-array-index-key': 0,
    'consistent-return': 0,
    'no-restricted-syntax': 0,
    'array-callback-return': 0,
    'default-case': 0,
    'react/prefer-stateless-function': 0,
    'default-param-last': 0,
  },
  overrides: [
    {
      files: ['webpack.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
};