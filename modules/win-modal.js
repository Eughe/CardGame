function showWinModal(modalWin, modalTxt, counter) {
    modalWin.style.transition = "opacity 1s ease 0.5s";
    modalWin.style.opacity = "1";
    modalWin.style.zIndex = "100";
    modalWin.style.backgroundColor = 'rgba(68, 68, 68, 0.9)';
    modalTxt.innerHTML = `ВЫ ВЫИГРАЛИ! <br/> Количество ходов: ${counter}`;
}

function restart() {
    window.location.reload();
}

export { showWinModal, restart }