/*
 * Node.js rules
 * As of ESLint 7.0.0 release notes, Node.js/CommonJS-specific rules have been
 * deprecated from core ruleset and will be removed in future major release
 * post v7.0.0. They are now contained inside eslint-plugin-node.
 */
module.exports = {
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error'
};
