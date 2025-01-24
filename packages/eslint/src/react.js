import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export const config = [
  {
    ignores: ["**/dist"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    name: "Config react",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      "react/prop-types": "off",
      "react/destructuring-assignment": "off",
      "react/require-default-props": "off",
      "react-hooks/exhaustive-deps": "warn", // useEffect의 의존성 배열 검사
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-array-index-key": "warn", // 배열 인덱스를 key로 사용 시 경고
      "react/function-component-definition": [
        "error",
        { namedComponents: ["arrow-function", "function-declaration"] },
      ],
      // JSX 내 불필요한 중괄호 사용 경고
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react-hooks/rules-of-hooks": "error", // Hook 규칙 위반 시 에러
      "react/self-closing-comp": "error", // 자식 없는 컴포넌트는 self-closing
    },
  },
  // 웹 접근성 규칙 설정
  {
    name: "jsx-a11y rules",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      // label 태그의 htmlFor 속성 필수화
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelAttributes: ["htmlFor"],
        },
      ],
      "jsx-a11y/mouse-events-have-key-events": "off", // 마우스 이벤트에 대한 키보드 이벤트 필수화 해제
    },
  },
];
