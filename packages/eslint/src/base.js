import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import jsonFormat from "eslint-plugin-json-format";
import ImportPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
// import rushStack from "@rushstack/eslint-config";

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  {
    name: "Config ignore patterns",
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
  {
    name: "Config LanguageOption",
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest", // 최신 JavaScript 문법 사용
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: "readonly",
        window: "readonly",
        process: "readonly",
        React: "readonly",
        console: "readonly",
      },
    },
  },
  // ESLint 기본 추천 규칙 적용
  js.configs.recommended,
  // rushstack 기본 추천 규칙 적용
  // rushStack.Config.recommended,
  // 'no' 키워드 필요한 eslint rule 관련 규칙 적용
  {
    name: "no-* rules",
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }], // console.log는 경고, warn/error는 허용
      "no-plusplus": "off", // '++' 허용
      "no-useless-catch": "off", // 불필요한 catch 블록 검사 비활성화
      "no-undef": "warn", // 미정의 변수 사용 시 경고로 변경
      "no-nested-ternary": "off", // 중첩 삼항 연산자 허용
      "no-alert": "off", // alert 사용 허용
      "no-eval": "error", // eval() 함수 사용 금지
      "no-var": "error", // var 사용 금지, let 또는 const 사용
      "no-duplicate-imports": "error", // 동일한 모듈에서 중복 import 금지
      "no-param-reassign": "off",
      "no-return-assign": "off", // forwardRef 동적 할당 관련
      "no-unused-vars": "off", // 아래 typescript 로 검사하므로 충돌하지 않도록 설정 해제
    },
  },
  {
    name: "json format rules",
    plugins: {
      "json-format": jsonFormat,
    },
  },
  {
    name: "import related rules",
    plugins: {
      import: ImportPlugin,
      "simple-import-sort": simpleImportSort,
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json", "./**/tsconfig.json"],
        },
      },
    },
    rules: {
      "import/no-unresolved": "off", // import 경로가 해결되지 않는 경우 경고를 끄는 규칙 off
      "import/prefer-default-export": "off", // 모듈이 하나의 export만 포함할 때 default export를 권장하지 않도록 비활성화
      "import/extensions": "off", // 파일 확장자 생략을 허용
      "import/no-cycle": "error", // 순환 참조 방지
      "import/no-duplicates": "error", // 중복 import 방지
      "import/no-unused-modules": "warn", // 사용되지 않는 export 경고
      "simple-import-sort/imports": "error", // import 구문을 자동으로 정렬
      "simple-import-sort/exports": "error", // export 구문을 자동으로 정렬
    },
  },
  // 사용하지 않는 import 처리
  {
    name: "Config unused import plugin",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error", // 사용하지 않는 import 제거
      // 사용하지 않는 변수 규칙
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all", // 모든 변수 검사
          varsIgnorePattern: "^_", // _로 시작하는 변수는 무시
          args: "after-used", // 사용된 매개변수 이후의 매개변수만 검사
          argsIgnorePattern: "^_", // _로 시작하는 매개변수는 무시
        },
      ],
    },
  },
  {
    name: "rest base rules",
    rules: {
      "prefer-const": "warn", // 재할당이 없는 변수는 const 사용 권장
      "object-shorthand": ["error", "always"], // 객체 속성 정의 시 축약형 사용 강제
      "arrow-body-style": ["error", "as-needed"], // 화살표 함수에서 블록 필요 없을 때 생략
      "consistent-return": "off",
    },
  },
];
