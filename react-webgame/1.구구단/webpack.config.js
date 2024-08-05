const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"],
  },
  entry: {
    app: ["./client"],
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
    plugins: [new webpack.loaderOptionsPlugin({ debug: true })],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};

// webpack은 설정의 연속이다.

// presets은 plugin들의 모음이다.
// 따라서 만약 preset의 요소 중 하나에 적용하고 싶은 설정이 있다면 그 요소를 배열로 바꾸고 중괄호 안에 설정을 적어주면 된다.
// ex) presets: [
// ["@babel/preset-env", {
// targets : {
//  browsers:['last 2 chrome versions']
// }
// }], "@babel/preset-react"
// ],

// @babel/preset-env는 자동으로 옛날 브라우저를 지원해준다. 위와 같이 설정을 추가하면 옛 브라우저를 어떻게 지원해줄지 구체적으로 정할 수 있다.

// 'browserslist'라는 사이트에 들어가보면 브라우저에 적용할 수 있는 설정들을 확인할 수 있다.

// 'browserslist' - 예시
// last 2 versions : 각 브라우저의 최신 2가지 버전.
// last 2 Chrome versions : 위와 동일하지만 Chrome만 해당됩니다.
// > 1% in KR : 한국에서 가장 많이 쓰는 브라우저 상위 1%들은 다 지원해줌(이에 해당하는 브라우저를 지원하기 위해 presets에서 필요한 plugin들을 알아서 적용해줌)
