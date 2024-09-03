// @type {import('stylelint').Config} enables Typescript to autocomplete and type-check

export default {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-styled-components",
    "stylelint-config-htmlacademy",
  ],
  rules: {
    "no-empty-source": null,
    "value-keyword-case": null,
  },
};
