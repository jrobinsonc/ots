module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'no-shadow': 'warn',
    'no-warning-comments': 'warn',
    'prefer-const': 'warn',
    'no-var': 'warn',

    'prettier/prettier': 'warn',

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.tsx', '**/*.js'],
      },
    ],
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-shadow': 'off', // Disabled in favor of @typescript-eslint/no-shadow

        'prettier/prettier': 'warn',

        'jsx-a11y/no-static-element-interactions': 'warn',

        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/typedef': [
          'warn',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: true,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: true,
            variableDeclarationIgnoreFunction: true,
          },
        ],

        'react/no-unused-prop-types': 'warn',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
