const React = require("react");
const ReactDom = require("react-dom");

const WordRelay = require("./WordRelay");
// 위와 같이 입력하여 필요한 컴포넌트만 불러올 수 있다.

ReactDom.render(<WordRelay />, document.querySelector("#root"));

// 여기에 모든 클래스들을 써도 되지만 그렇게 하면 많은 클래스들을 관리하기 어려우니 같은 폴더 안의 다른 파일에 클래스를 나눠서 저장한다.
