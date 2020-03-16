const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const root = path.resolve(__dirname, "../");
module.exports = webpackMerge(baseConfig, {
  output: {
    path: path.resolve(root, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: path.resolve(root, "src"),
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.resolve(root, "dist"),
    port: 9000,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
