import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export const config = [
  {
    name: "typescript-eslint rules",
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
          leadingUnderscore: "allow",
        },
      ],
      "@typescript-eslint/no-use-before-define": "off",
    },
  },
];
