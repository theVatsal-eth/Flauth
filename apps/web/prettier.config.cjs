/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: "lf",
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "es5",
  semi: true,
  arrowParens: "avoid",
  singleQuote: true,
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "<TYPES>",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSortSpecifiers: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderBuiltinModulesToTop: true,
};
