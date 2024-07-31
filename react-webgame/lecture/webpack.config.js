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

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};

// entry로 입력(엔트리에 있는 파일을 읽음)을 받고 module로 모듈을 적용한 후 output으로 해당 파일들을 출력한다.

//  /\.jsx?/ 이 부분은 정규표현식에 해당한다.

// rules는 여러 개의 규칙을 적용해야 하기 때문에 배열을 써준다.

// rules의 loader는 바벨 로더의 룰을 적용하겠다는 뜻이다.
// 즉, JS와 JSX파일에 바벨을 적용해서 최신 또는 실험적인 문법을 컴퓨터가 이해할 수 있도록 하겠다는 것이다.

//  rules의 options 부분은 바벨의 옵션을 넣는 부분이다.
// 미리 설치한 babel/preset-env와 babel/preset-react를 적어주면 된다.
