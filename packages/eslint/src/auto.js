module.exports = {
  plugins: ["@youngseokangg"],
  extends: ["plugin:@youngseo-kangg/base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@youngseo-kangg/typescript"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@youngseo-kangg/react"],
    },
  ],
};
