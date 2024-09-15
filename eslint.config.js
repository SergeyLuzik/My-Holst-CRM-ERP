export default [
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "htmlacademy/react",
      "plugin:storybook/recommended",
    ],
  },
  {
    rules: {
      "react/prop-types": ["off"],
    },
  },
  {
    parser: "@babel/eslint-parser",
  },
  {
    parserOptions: {
      requireConfigFile: false,
    },
  },
  { env: { browser: true } },
  {
    settings: {
      react: { version: "^18.3.1" },
    },
  },
];
