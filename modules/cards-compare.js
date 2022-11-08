const openedCards = [];
let clickCounter = 0;
let removedCards = 0;

function sameCardRemove(div) {
    let guessedCard = div.querySelectorAll(".opened");
    guessedCard[0].src = "./img/empty.png";
    guessedCard[0].className = "deleteded";
    guessedCard[1].src = "./img/empty.png";
    guessedCard[1].className = "deleteded";
    openedCards.splice(0, 2);
    return removedCards += 2;
}

function differentCardClose(div) {
    let unguessedCard = div.querySelectorAll(".opened");
    unguessedCard[0].src = "./img/back1.png";
    unguessedCard[0].className = "closed";
    unguessedCard[1].src = "./img/back1.png";
    unguessedCard[1].className = "closed";
    openedCards.splice(0, 2);
}

function compareCard(array, div) {
    return function (event) {
        if (event.target.tagName === 'IMG' && event.target.className === "closed") {
            if (openedCards.length > 1 && openedCards[0] !== openedCards[1]) {
                differentCardClose(div);
            };
            event.target.src = `./img/${array[event.target.id]}.png`;
            event.target.className = "opened";
            openedCards.push(array[event.target.id]);

            if (openedCards[0] === openedCards[1]) {
                sameCardRemove(div);
            };
            return clickCounter++;
        }
    }
}

export { compareCard, removedCards, clickCounter }