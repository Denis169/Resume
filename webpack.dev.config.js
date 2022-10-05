const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  watchOptions: {
    ignored: '**/node_modules',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 8800,
    open: true,
  },
};
