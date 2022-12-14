/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  trailingComma: "all",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/", "^[./]"],
  importOrderSeparation: true,
};
