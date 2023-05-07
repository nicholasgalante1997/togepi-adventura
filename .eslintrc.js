module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    "sort-imports": ["warn", {
      "ignoreCase": false,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      "allowSeparatedGroups": false
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "max-len": ["error", { "code": 140, "tabWidth": 2 }],
    "semi": ["off", "always"],
    "@typescript-eslint/no-non-null-assertion": "warn",
  }
}
