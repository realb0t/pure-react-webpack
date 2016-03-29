var webpack = require("webpack");
var path = require("path");

module.exports = {
  target:  "web",
  cache:   true,
  context: __dirname,
  debug:   true,
  devtool: false,
  entry:   [ path.join(__dirname, "src/client") ],
  output:  {
    path:          path.join(__dirname, "dist"),
    filename:      "client.js",
    chunkFilename: "[name].[id].js"
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ],
  module:  {
    loaders: [
      {test: /\.json$/, loaders: ["json"]},
      {test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/, loaders: ["file?context=static&name=/[path][name].[ext]"], exclude: /node_modules/}
    ],
    postLoaders: [
      {test: /\.js$/, loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react&presets[]=react-hmre"], exclude: /node_modules/}
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    modulesDirectories: [
      "src",
      "node_modules"
    ],
    extensions: ["", ".json", ".js"]
  },
  node:    {
    __dirname: true,
    fs:        'empty'
  }
};