window.onload = () => {

    var toGuess = Math.floor(Math.random() * 10) + 1;

    var guess = -1;
    var tries = 3;
    while (guess !== toGuess && tries > 0 || guess == -1) {
        if (isNaN(guess) || guess === null || guess == -1) {
            guess = Number(window.prompt("Devinez le nombre. (" + tries + " éssais restants)", ""));
        } else {
            tries--;
            if (guess < toGuess) {
                guess = Number(window.prompt("Plus grand. (" + tries + " éssais restants)", ""));
            } else if (guess > toGuess) {
                guess = Number(window.prompt("Plus petit. (" + tries + " éssais restants)", ""));
            }
        }
    }
    if (tries == 0)
        alert("Vous n'avez plus d'éssais.. La bonne réponse était : " + toGuess);
    else {
        var score = 4 - tries;
        alert("Vous avez deviné en " + score + " éssais! La réponse était : " + toGuess);
    }

    // location.reload();
}
