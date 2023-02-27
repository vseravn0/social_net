module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        // отступы
        'react/jsx-indent': [2, 4],
        // пропс отступы в тсх
        'react/jsx-indent-props': [2, 4],
        // отступы
        indent: [2, 4],
        // где разрешен жсч
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        // абсолютные пути
        'import/no-unresolved': 'off',
        // дефолтные экспорты
        'import/prefer-default-export': 'off',
        // не используемые переменные
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        // дефолтн пропсы
        'react/require-default-props': 'off',
        // имрорта реакта с 17 версии
        'react/react-in-jsx-scope': 'off',
        // спред при пропсах
        'react/jsx-props-no-spreading': 'warn',
        // prefer functional declaration
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        // ругается на расширения
        'import/extensions': 'off',
        // нельзя дев зависимости импортить
        'import/no-extraneous-dependencies': 'off',
        // запрещает андерскор
        'no-underscore-dangle': 'off',
        // ругается если забыли локализацию
        'i18next/no-literal-string': [
            'error', {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            },
        ],
        // игнорит максимальную длинну комов в комментах
        'max-len': ['error', { ignoreComments: true, code: 100 }],
    },
    globals: {
        __IS_DEV__: true,
    },
    // переопредялет правила для определнных тиипов
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
