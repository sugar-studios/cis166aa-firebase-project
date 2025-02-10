function playGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let min = 50;
    let max = 75;
    let message = `Your Number: ${randomNumber}, `;

    if (randomNumber >= min && randomNumber <= max) {
        message += "You Won!";
    } else {
        message += "Keep Trying!";
    }

    document.getElementById("result").innerHTML = message;
}
