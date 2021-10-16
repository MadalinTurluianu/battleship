import { Gameboard } from "./components/gameboard/gameboard";
import { Player } from "./components/player/player";

import "./components/pre-game-initialization/pre-game-initialization.css";
import { preGameInitialization} from './components/pre-game-initialization/pre-game-initialization';
import { gameInitialization} from './components/game-initialization/game-initialization';

const body = document.querySelector("body");

const preGamePage = preGameInitialization();

body.appendChild(preGamePage.section);