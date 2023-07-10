import MainController from "./controllers/MainController.js";

// TODO: app.css 파일이 사라졌습니다. 이제는 app.scss를 불러올수 있도록 웹팩 구성을 추가하세요.
import "./app.scss";  // sass만 쓸거면 확장자를 sass로 하고 css를 함께 사용할거라면 확장자를 scss로 합니다.

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
