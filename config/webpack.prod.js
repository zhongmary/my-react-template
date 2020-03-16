const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const root = path.resolve(__dirname, "../");
module.exports = webpackMerge(baseConfig, {
  output: {
    path: path.resolve(root, "dist"),
    filename: "bundle.[chunkhash:10].js"
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
  devtool: "#source-map",
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false
      },
      sourceMap: true,
      parallel: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
