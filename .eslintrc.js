module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'react/display-name': 0,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-duplicate-imports': 2,
    'import/order': 2,
  },
};
