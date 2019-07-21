var path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  stats: "errors-only",
  devServer: {
    stats: "errors-only",
    overlay: true,
    contentBase: path.join(__dirname, "src/assets")
  }
};
