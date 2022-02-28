const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const panels = {
  brb: './src/dashboard/scripts/brb.js',
  social: './src/dashboard/scripts/social.js',
  timer: './src/dashboard/scripts/timer.js',
}

const pages = Object.keys(panels).map(
  (name) =>
    new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.join(__dirname, 'src', 'dashboard', `panel-template.html`),
      chunks: ['vendor', 'shared', name],
    }),
)

module.exports = {
  mode: 'production',
  entry: panels,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin(), ...pages],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dashboard'),
  },
}
