var computerPoints = 0
var userPoints = 0
var finishLoop = 0
var letterFilter = 0


do {
    var userChoice = prompt("Write R for rock, P for paper or S for scissors")
    var randomChoice = Math.random()
    var winnerAlert = ""

    // Filters for r,R,s,S,p,P which are the only values which the game takes into consideration
    userChoice = userChoice.toUpperCase();
    if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
        console.log("Correct entered value")
    } else {
        do {
            userChoice = prompt("Please write R for rock, P for paper or S for scissors")
            userChoice = userChoice.toUpperCase();
            if (userChoice === "R" || userChoice === "P" || userChoice === "S") {
                letterFilter = ++letterFilter
            }
        } while (letterFilter < 1)
    }

    // Computer chooses a number and changes to the object depending on the number
    if (randomChoice <= .33) {
        randomChoice = "Rock"
    } else if (randomChoice <= .66) {
        randomChoice = "Paper"
    } else {
        randomChoice = "Scissors"
    };

    // Change of letter to the object
    if (userChoice == "R") {
        userChoice = "Rock"
    } else if (userChoice == "P") {
        userChoice = "Paper"
    } else {
        userChoice = "Scissors"
    };

    //Competition choice
    if (userChoice === randomChoice) {
        winnerAlert = "It is a tie!"
    } else if (userChoice === "Rock" && randomChoice === "Paper") {
        winnerAlert = "Computer wins!"
        computerPoints = computerPoints + 1
    } else if (userChoice === "Scissors" && randomChoice === "Rock") {
        winnerAlert = "Computer wins!"
        computerPoints = computerPoints + 1
    } else if (userChoice === "Paper" && randomChoice === "Scissors") {
        winnerAlert = "Computer wins!"
        computerPoints = computerPoints + 1
    } else {
        winnerAlert = "You Win!"
        userPoints = userPoints + 1;
    };

    // Helps the program end the loop to determine the winner
    if (userPoints === 3) {
        finishLoop = finishLoop + 1;
    };
    if (computerPoints === 3) {
        finishLoop = finishLoop + 1;
    };

    alert(`The computer chose ${randomChoice}, you chose ${userChoice}. ${winnerAlert}. Computer points: ${computerPoints} Your Points ${userPoints}`)
} while (finishLoop < 1);

// Determines who won
if (userPoints === 3) {
    alert("YOU WIN!")
} else {
    alert("THE COMPUTER WINS!")
}

// Ask for confirmation for a new game
var newGame = confirm("Want to play again?")
if (newGame) {
    location.reload();
} else {
    alert("Thank you for playing")
}