module.exports = {
  extends: ["plugin:import/errors", "eslint:recommended"],
  plugins: ["json-format", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error", // import 구문을 자동으로 정렬
    "simple-import-sort/exports": "error", // export 구문을 자동으로 정렬
    "import/no-unresolved": "off", // import 경로가 해결되지 않는 경우 경고를 끄는 규칙 off
    "import/prefer-default-export": "off", // 모듈이 하나의 export만 포함할 때 default export를 권장하지 않도록 비활성화
    "import/extensions": "off", // 파일 확장자 생략을 허용
    "prefer-const": "warn", // 재할당이 없는 변수는 const 사용 권장
    "object-shorthand": ["error", "always"], // 객체 속성 정의 시 축약형 사용 강제
    "arrow-body-style": ["error", "as-needed"], // 화살표 함수에서 블록 필요 없을 때 생략
    "consistent-return": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }], // console.log는 경고, warn/error는 허용
    "no-plusplus": "off",
    "no-eval": "error", // eval() 함수 사용 금지
    "no-var": "error", // var 사용 금지, let 또는 const 사용
    "no-duplicate-imports": "error", // 동일한 모듈에서 중복 import 금지
    "no-param-reassign": "off",
    "no-return-assign": "off", // forwardRef 동적 할당 관련
    "no-alert": "off",
  },
};
