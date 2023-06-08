module.exports = {
  root: true,
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      parser: 'flow',
    },
  ],
  extends: [
    // ...
    '@react-native-community',
    'eslint:recommended',
    'prettier', // Make sure this is the last
  ],
};
