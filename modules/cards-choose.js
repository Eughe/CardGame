function arrayNumbersFill(first, last, array) {
    for (let i = first; i <= last; i++) {
        array.push(i);
    };
};

function playCardsFill(cardArr, indexArr, resultArr, level) {
    let chosenCard;
    let cardPlace;
    let randomCard;
    let randomIndex;
    for (let i = 0; i < level / 2; i++) {
        randomCard = Math.floor(Math.random() * cardArr.length);
        chosenCard = cardArr[randomCard];

        randomIndex = Math.floor(Math.random() * indexArr.length);
        cardPlace = indexArr[randomIndex];
        resultArr[cardPlace] = chosenCard;
        indexArr.splice(randomIndex, 1);

        randomIndex = Math.floor(Math.random() * indexArr.length);
        cardPlace = indexArr[randomIndex];
        resultArr[cardPlace] = chosenCard;
        indexArr.splice(randomIndex, 1);

        cardArr.splice(randomCard, 1);
    };
};

export { arrayNumbersFill, playCardsFill }