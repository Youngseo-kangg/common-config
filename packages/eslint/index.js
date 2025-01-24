// src/base.js
import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import jsonFormat from "eslint-plugin-json-format";
import ImportPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import rushStack from "@rushstack/eslint-config";
var config = [
  // ESLint 기본 추천 규칙 적용
  js.configs.recommended,
  // rushstack 기본 추천 규칙 적용
  rushStack.Config.recommended,
  // 'no' 키워드 필요한 eslint rule 관련 규칙 적용
  {
    name: "no-* rules",
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // console.log는 경고, warn/error는 허용
      "no-plusplus": "off",
      // '++' 허용
      "no-useless-catch": "off",
      // 불필요한 catch 블록 검사 비활성화
      "no-undef": "warn",
      // 미정의 변수 사용 시 경고로 변경
      "no-nested-ternary": "off",
      // 중첩 삼항 연산자 허용
      "no-alert": "off",
      // alert 사용 허용
      "no-eval": "error",
      // eval() 함수 사용 금지
      "no-var": "error",
      // var 사용 금지, let 또는 const 사용
      "no-duplicate-imports": "error",
      // 동일한 모듈에서 중복 import 금지
      "no-param-reassign": "off",
      "no-return-assign": "off",
      // forwardRef 동적 할당 관련
      "no-unused-vars": "off"
      // 아래 typescript 로 검사하므로 충돌하지 않도록 설정 해제
    }
  },
  {
    name: "json format rules",
    Plugins: {
      "json-format": jsonFormat
    }
  },
  {
    name: "import related rules",
    Plugins: {
      import: ImportPlugin,
      "simple-import-sort": simpleImportSort
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json", "./**/tsconfig.json"]
        }
      }
    },
    rules: {
      "import/no-unresolved": "off",
      // import 경로가 해결되지 않는 경우 경고를 끄는 규칙 off
      "import/prefer-default-export": "off",
      // 모듈이 하나의 export만 포함할 때 default export를 권장하지 않도록 비활성화
      "import/extensions": "off",
      // 파일 확장자 생략을 허용
      "import/no-cycle": "error",
      // 순환 참조 방지
      "import/no-duplicates": "error",
      // 중복 import 방지
      "import/no-unused-modules": "warn",
      // 사용되지 않는 export 경고
      "simple-import-sort/imports": "error",
      // import 구문을 자동으로 정렬
      "simple-import-sort/exports": "error"
      // export 구문을 자동으로 정렬
    }
  },
  // 사용하지 않는 import 처리
  {
    name: "Config unused import plugin",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      // 사용하지 않는 import 제거
      // 사용하지 않는 변수 규칙
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          // 모든 변수 검사
          varsIgnorePattern: "^_",
          // _로 시작하는 변수는 무시
          args: "after-used",
          // 사용된 매개변수 이후의 매개변수만 검사
          argsIgnorePattern: "^_"
          // _로 시작하는 매개변수는 무시
        }
      ]
    }
  },
  {
    name: "rest base rules",
    rules: {
      "prefer-const": "warn",
      // 재할당이 없는 변수는 const 사용 권장
      "object-shorthand": ["error", "always"],
      // 객체 속성 정의 시 축약형 사용 강제
      "arrow-body-style": ["error", "as-needed"],
      // 화살표 함수에서 블록 필요 없을 때 생략
      "consistent-return": "off"
    }
  }
];

// src/react.js
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
var config2 = [
  {
    ignores: ["**/dist"]
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    name: "Config react",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks
    },
    rules: {
      "react/prop-types": "off",
      "react/destructuring-assignment": "off",
      "react/require-default-props": "off",
      "react-hooks/exhaustive-deps": "warn",
      // useEffect의 의존성 배열 검사
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-array-index-key": "warn",
      // 배열 인덱스를 key로 사용 시 경고
      "react/function-component-definition": [
        "error",
        { namedComponents: ["arrow-function", "function-declaration"] }
      ],
      // JSX 내 불필요한 중괄호 사용 경고
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" }
      ],
      "react-hooks/rules-of-hooks": "error",
      // Hook 규칙 위반 시 에러
      "react/self-closing-comp": "error"
      // 자식 없는 컴포넌트는 self-closing
    }
  },
  // 웹 접근성 규칙 설정
  {
    name: "jsx-a11y rules",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      // label 태그의 htmlFor 속성 필수화
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelAttributes: ["htmlFor"]
        }
      ],
      "jsx-a11y/mouse-events-have-key-events": "off"
      // 마우스 이벤트에 대한 키보드 이벤트 필수화 해제
    }
  }
];

// src/typescript.js
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
var config3 = [
  {
    name: "typescript-eslint rules",
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true
      }
    },
    plugins: {
      "@typescript-eslint": typescript
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
          leadingUnderscore: "allow"
        }
      ],
      "@typescript-eslint/no-use-before-define": "off"
    }
  }
];

// src/query.js
import ReactQueryConfigs from "@tanstack/eslint-plugin-query";
var config4 = [
  {
    name: "react query configs",
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@tanstack/query": {
        rules: ReactQueryConfigs.rules
      }
    },
    rules: ReactQueryConfigs.configs.recommended.rules
  }
];
export {
  config as baseConfig,
  config4 as queryConfig,
  config2 as reactConfig,
  config3 as typescriptConfig
};
/*! For license information please see index.js.LEGAL.txt */
//# sourceMappingURL=index.js.map
