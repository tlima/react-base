const isDevelopment = process.env.NODE_ENV !== 'production';

const presets = ['@babel/preset-react'];

const plugins = [[
  'babel-plugin-styled-components', {
    ssr: false,
    displayName: isDevelopment,
    minify: !isDevelopment,
    transpileTemplateLiterals: !isDevelopment
  },
]];

module.exports = { presets, plugins };
