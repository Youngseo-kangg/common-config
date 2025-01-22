module.exports = {
  plugins: ["react", "react-refresh", "react-hooks", "jsx-a11y"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  settings: {
    react: {
      // 현재 React 버전을 명시합니다.
      // 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로 린트 과정에서 속도가 느려질 수 있습니다.
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off", // key={idx}
    "react/function-component-definition": [
      "error",
      { namedComponents: ["arrow-function", "function-declaration"] },
    ],
    "react-hooks/rules-of-hooks": "error",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelAttributes: ["htmlFor"],
      },
    ],
  },
};
