import { arrayNumbersFill, playCardsFill } from './modules/cards-choose.js';
import { cardsCreate, playWindowStyle } from './modules/cards-create.js';
import { showWinModal, restart } from './modules/win-modal.js';
import { compareCard, removedCards, clickCounter } from './modules/cards-compare.js';

const playWindow = document.getElementById("playwindow");
const cardWrapper = document.getElementById("cardwrapper");
const closeBtn = document.getElementById("closebtn");
const modalWindow = document.getElementById('modalwindow');
const modalText = document.getElementById('modaltext');
const restartBtn = document.getElementById('restartbtn');
const levelSelector = document.getElementById('select');
const playButton = document.getElementById('playbtn');
let allCardsArr = [];
let cardIndexesArr = [];
let difficultyLevel;

function selectDifficulty() {
    playButton.removeAttribute('disabled');
    difficultyLevel = levelSelector.value;
}

levelSelector.addEventListener('change', selectDifficulty);
let playCardsArr = new Array(difficultyLevel);

function startGame() {
    arrayNumbersFill(1, 54, allCardsArr);
    arrayNumbersFill(0, difficultyLevel - 1, cardIndexesArr);
    playCardsFill(allCardsArr, cardIndexesArr, playCardsArr, difficultyLevel);
    cardsCreate(difficultyLevel, cardWrapper);
    playWindowStyle(difficultyLevel, playWindow);
}

function winCheck() {
    console.log(clickCounter);
    console.log(removedCards);
    if (removedCards >= difficultyLevel) {
        showWinModal(modalWindow, modalText, clickCounter);
    }
}

playButton.addEventListener('click', startGame);
closeBtn.addEventListener('click', restart);
restartBtn.addEventListener("click", restart);
cardWrapper.addEventListener('click', compareCard(playCardsArr, cardWrapper));
cardWrapper.addEventListener('click', winCheck);