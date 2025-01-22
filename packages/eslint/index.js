const auto = require("./src/auto");
const base = require("./src/base");
const react = require("./src/react");
const typescript = require("./src/typescript");

module.exports = {
  extends: ["@rushstack/eslint-config/profile/web-app"],
  configs: {
    auto,
    base,
    react,
    typescript,
  },
};
