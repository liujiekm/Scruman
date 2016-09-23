// var express = require('express');
// var app = express();

// // var webpack = require('webpack')
// // var webpackDevMiddleware = require('webpack-dev-middleware')
// // var webpackHotMiddleware = require('webpack-hot-middleware')
// // var config = require('./webpack.config')

// // var compiler = webpack(config)
// // app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// // app.use(webpackHotMiddleware(compiler))
// app.use(express.static(__dirname));

// app.get('*',function(req,rep) {
//     rep.sendFile(__dirname+'/index.html');
// });

// var port = 8000

// app.listen(port, function(error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
//   }
// });




const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 8000;
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
