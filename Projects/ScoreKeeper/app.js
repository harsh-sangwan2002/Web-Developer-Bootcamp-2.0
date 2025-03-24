const player1 = document.querySelector('#p1');
const player2 = document.querySelector('#p2');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const reset = document.querySelector('#reset');
const playto = document.querySelector('#playto');

let winningScore;
let isGameOver = false;

playto.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
});

button1.addEventListener('click', () => {

    if (!isGameOver) {
        player1.innerText = parseInt(player1.innerText) + 1;
        if (player1.innerText == winningScore) {
            isGameOver = true;
            player1.style.color = 'green';
            player2.style.color = 'red';
        }
    }
});

button2.addEventListener('click', () => {

    if (!isGameOver) {
        player2.innerText = parseInt(player2.innerText) + 1;
        if (player2.innerText == winningScore) {
            isGameOver = true;
            player2.style.color = 'green';
            player1.style.color = 'red';
        }
    }
});


reset.addEventListener('click', (e) => {
    isGameOver = false;
    player1.innerText = 0;
    player2.innerText = 0;
    playto.value = 3;
    player1.style.color = 'black';
    player2.style.color = 'black';
})