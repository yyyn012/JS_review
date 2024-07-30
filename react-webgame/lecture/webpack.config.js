const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
