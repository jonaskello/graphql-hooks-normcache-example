var path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  stats: "errors-only",
  devServer: {
    stats: "errors-only",
    overlay: true,
    contentBase: path.join(__dirname, "src/assets")
  }
};
