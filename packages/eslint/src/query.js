import * as tanstackQueryPlugin from "@tanstack/eslint-plugin-query";

export const config = [
  {
    name: "react query configs",
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@tanstack/query": tanstackQueryPlugin,
    },
    rules: {
      ...tanstackQueryPlugin.configs.recommended.rules,
    },
  },
];
