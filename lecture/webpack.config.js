//웹팩의 속성들을 넣는 공간이다.
//설정만 하면 알아서 흩어져 있는 파일을 하나로 합쳐준다.

const path = require("path");
//path는 노드에서 경로를 쉽게 조작하도록 도와주는 역할을 한다.

module.exports = {
  name: "word-relay-setting", // 이름
  mode: "development", // 실서비스에서는 production으로 바꾸면 된다.
  devtool: "eval", // 빠르게
  resolve: {
    extensions: [".js", ".jsx"],
    // entry의 app에 입력할 파일들의 확장자를 확인하고 알맞은 js나 jsx를 파일명 끝에 붙여준다.
  },

  entry: {
    //입력
    app: ["./client"],
    // client.jsx가 WordReplay를 불러오기 때문에 client.jsx만 적어줘도 충분하다.(resolve의 extensions설정을 했다면 뒤의 확장자를 뺀 파일명만 써줘도 된다.)
  },

  output: {
    //출력
    path: path.join(__dirname, "dist"),
    //path를 쓰면 경로를 알아서 합쳐준다. 실제 경로는 더 길고 복잡하며 컴퓨터마다 경로가 다르다.

    filename: "app.js",
  },
};
