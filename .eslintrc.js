module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'import/no-unresolved': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/extensions': 'off',
      'no-use-before-define': 'off',
      'react/style-prop-object': 'off',
      'no-useless-constructor': 'off',
      'arrow-body-style': 'off',
      'no-unused-vars': 'off',
      'prefer-arrow-callback': 'off',
    },
}
