module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'object-shorthand': 'off',
    'max-lines': ['error', 600],
    'no-undef': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/attribute-hyphenation': 'off',
    'no-unused-vars': 'warn',
    'unicorn/prefer-includes': 'warn',
    camelcase: 'warn',
    eqeqeq: 'off',
  },
  globals: {
    _: false,
    moment: false,
    $notify: false,
    $formSetting: false,
  },
}
