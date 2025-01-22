# prettier

개발 환경에서 사용하는 prettier 설정을 정리한 bundle 입니다.

---

## 설명

```
module.exports = {
  // 문자열에서 쌍따옴표 (")를 사용합니다.
  singleQuote: false,

  // 세미콜론(;)을 사용하여 문장을 종료합니다.
  semi: true,

  // 탭 너비를 2칸으로 설정합니다.
  tabWidth: 2,

  // 들여쓰기 시 스페이스(공백)을 사용합니다.
  useTabs: false,

  // 쉼표를 추가하지 않음
  trailingComma: "none",

  // 한 줄의 최대 길이를 100자로 제한합니다.
  printWidth: 100,

  // 화살표 함수의 매개변수를 항상 괄호로 감쌉니다.
  arrowParens: "always",
};
```
