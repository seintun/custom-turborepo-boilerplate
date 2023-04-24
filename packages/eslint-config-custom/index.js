module.exports = {
    extends: ['next', 'turbo', 'prettier'],
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
    },
    parserOptions: {
        babelOptions: {
            presets: [require.resolve('next/babel')],
        },
    },
    plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
    rules: {
        'react-hooks/exhaustive-deps': 'error',
        'no-var': 'error',
        'brace-style': 'error',
        'prefer-template': 'error',
        radix: 'error',
        'space-before-blocks': 'error',
        'import/prefer-default-export': 'off',
    },
};
