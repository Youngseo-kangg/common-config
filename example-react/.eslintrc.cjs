require("@common-config/eslint");
require("@common-config/prettier");

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "@org/eslint-config", // 공통 ESLint 컨피그 불러오기
    "@org/eslint-config/mixins/react", // React용 ESLint 컨피그 불러오기
  ],
  settings: {
    react: {
      version: "18.3",
    },
  },
  // Rush Stack은 @typescript-eslint 플러그인을 내장하고 있으므로
  // 타입스크립트 파서에 대한 설정이 필요합니다.
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};