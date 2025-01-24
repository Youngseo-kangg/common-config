import ReactQueryConfigs from "@tanstack/eslint-plugin-query";

export const config = [
  {
    name: "react query configs",
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@tanstack/query": {
        rules: ReactQueryConfigs.rules,
      },
    },
    rules: ReactQueryConfigs.configs.recommended.rules,
  },
];
