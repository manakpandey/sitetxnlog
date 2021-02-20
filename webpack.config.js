const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src/components/app/index.tsx"),
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "src",
        "components",
        "app",
        "index.html"
      ),
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new ESLintPlugin({
      extensions: ["tsx", "ts", "jsx", "js"],
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
  },
};
