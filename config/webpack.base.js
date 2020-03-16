const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const root = path.resolve(__dirname, "../");
module.exports = {
  entry: path.resolve(root, "src"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: "url-loader" //负责img、font等静态资源的编译
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: "url-loader"
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hello luke",
      template: "./index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      src: path.resolve(root, "src"),
      "@utils": path.resolve(root, "src/utils")
    }
  }
};
