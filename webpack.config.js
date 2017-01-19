const webpack = require('webpack');
const baseConf = require('./webpack.config.base.js');
baseConf.entry.app = ['./src/main', 'eventsource-polyfill', 'webpack-hot-middleware/client'];
baseConf.plugins.push(new webpack.HotModuleReplacementPlugin());
baseConf.devTool = 'eval-source-map';
module.exports = baseConf;