const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

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

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], //browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-transform-class-properties",
            //"react-refresh/babel",
            //babel이 최신 문법을 적용할 뿐만 아니라 핫 로더 기능까지 추가해준다.
          ],
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new RefreshWebpackPlugin(),
  ],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
  //devServer 설정
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
  // webpack의 업로드로 인해 devServer설정 방식이 위와 같이 바뀜

  // devServer => devMiddleware

  // static이 추가되었다. static의 directory에는 __dirname과 index.html이 위치해있는 폴더이름을 적어준다.

  //ex) static: { directory: path.resolve(__dirname, "src") },

  // 만약 index.html이 같은 폴더에 있다면 위와 같이 __dirname만 적어주면 된다.
};
