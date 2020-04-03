const base = require('./base');
const bestPractices = require('./best-practices');
const es6 = require('./es6');
const jest = require('./jest');
const node = require('./node');
const style = require('./style');
const unicorn = require ('./unicorn');
const variables = require('./variables');

module.exports = {
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: [
        'jest',
        'no-use-extend-native',
        'node',
        'unicorn',
    ],
    rules: {
        ...base,
        ...bestPractices,
        ...es6,
        ...jest,
        ...node,
        ...style,
        ...unicorn,
        ...variables,
    }
};
