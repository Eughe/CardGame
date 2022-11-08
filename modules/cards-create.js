let gameCards;

function cardsCreate(amount, wrapper) {
    for (let i = 0; i < amount; i++) {
        let card = document.createElement("div");
        card.className = "card";
        let img = document.createElement("img");
        img.className = "closed";
        img.src = "./img/back1.png";
        img.id = `${i}`;
        wrapper.append(card);
        card.append(img);
    }
    gameCards = document.querySelectorAll(".card");
}

function playWindowStyle(amount, playWin) {
    for (let i = 0; i < gameCards.length; i++) {
        if (16 < amount && amount <= 32) {
            gameCards[i].style.maxWidth = "12%";
        } else if (amount > 32) {
            gameCards[i].style.maxWidth = "10%";
        }
    }
    playWin.style.zIndex = "10";
    playWin.style.transition = "opacity 2s ease 0.5s";
    playWin.style.opacity = "1";
}

export { cardsCreate, playWindowStyle }

