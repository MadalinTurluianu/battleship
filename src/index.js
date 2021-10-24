import { Gameboard } from "./components/gameboard/gameboard";
import { Player } from "./components/player/player";

import "./pages/select-name-page/select-name-page.css";
import { selectNamePage} from './pages/select-name-page/select-name-page';

import "./pages/create-gameboard-page/create-gameboard-page.css";
import { createGameboardPage } from "./pages/create-gameboard-page/create-gameboard-page";

const body = document.querySelector("body");

const initialPage = selectNamePage();
const boardConfPage = createGameboardPage();

/* initialPage.button.addEventListener("click", function() {
  let playerName = initialPage.input.value.trim();

  if(playerName !== "") {
    body.removeChild(initialPage.section);
    body.appendChild(boardConfPage.playerBoard);
  }

  initialPage.input.value = "";
})

body.appendChild(initialPage.section);
 */

body.appendChild(boardConfPage.page)

boardConfPage.confirmBtn.addEventListener("click", function () {
  if (boardConfPage.boats.length === 0) {
    body.removeChild(boardConfPage.page);
  }
})