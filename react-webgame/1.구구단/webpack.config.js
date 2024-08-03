const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  reslove: {
    extensions: [".jsx", ".js"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    fliename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
