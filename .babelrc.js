const _IS_DEVELOPMENT_ = process.env.NODE_ENV !== 'production';

const presets = ['@babel/preset-react'];

const plugins = [[
  'babel-plugin-styled-components', {
    ssr: false,
    displayName: _IS_DEVELOPMENT_,
    minify: !_IS_DEVELOPMENT_,
    transpileTemplateLiterals: !_IS_DEVELOPMENT_
  },
]];

module.exports = { presets, plugins };
