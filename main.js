function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function test() {
    prompt("THIS IS A TEST");
}

var wins = 0;
var losses = 0;
var draws = 0;

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("draws").innerHTML = draws;

// you can use a two dimmensional array, too, like this
var winLoseOrDraw = [[]];
winLoseOrDraw[0][1] = "Lose";
winLoseOrDraw[0][2] = "Win";
winLoseOrDraw[0][3] = "Win";
winLoseOrDraw[0][4] = "Lose";

winLoseOrDraw[1][1] = "Win";
winLoseOrDraw[1][21] = "Lose";
winLoseOrDraw[1][3] = "Lose";
winLoseOrDraw[1][4] = "Win";
//..etc.

//something like this....this code hasn't been tested.....
function compare(elem_id) {

    var userChoice = elem_id;
    var compChoice = getRandomInt(5);
    var winLoseDraw = "";
    
    // then you can get your result by accessing the array loike this
    var results = winLoseOrDraw[userChoice][compChoice];

    // if a draw set results = "draw"

    //to track score you could use a switch
    switch(results)
    {
        case "Lose":
            losses++;
            break;

        case "Win":
            wins++;
            break;

        //etc.

        case "draw":
            draws++
            break;
    }
}

function compare(elem_id) {

    var userChoice = elem_id;
    var compChoice = getRandomInt(5);
    var winLoseDraw = "";

    if (userChoice == compChoice){
        alert("It's A Draw!");
        draws ++;
    }

    //Rock
    else if (userChoice == 0 && compChoice == 1){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 0 && compChoice == 2){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 0 && compChoice == 3){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 0 && compChoice == 4){
        winLoseDraw = "Lose";
        losses ++;
    }
    
    //Paper
    else if (userChoice == 1 && compChoice == 0){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 1 && compChoice == 2){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 1 && compChoice == 3){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 1 && compChoice == 4){
        winLoseDraw = "Win";
        wins ++;
    }
    
    //Scissors
    else if (userChoice == 2 && compChoice == 0){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 2 && compChoice == 1){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 2 && compChoice == 3){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 2 && compChoice == 4){
        winLoseDraw = "Lose";
        losses ++;
    }

    //Lizard
    else if (userChoice == 3 && compChoice == 0){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 3 && compChoice == 1){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 3 && compChoice == 2){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 3 && compChoice == 4){
        winLoseDraw = "Win";
        wins ++;
    }

    else if (userChoice == 4 && compChoice == 0){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 4 && compChoice == 1){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 4 && compChoice == 2){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 4 && compChoice == 3){
        winLoseDraw = "Lose";
        losses ++;
    }

    if (userChoice == 0){
        userChoice = "Rock";
    }
    else if (userChoice == 1){
        userChoice = "Paper";
    }
    else if (userChoice == 2){
        userChoice = "Scissors";
    }
    else if (userChoice == 3){
        userChoice = "Lizard";
    }
    else if (userChoice == 4){
        userChoice = "Spock";
    }    

    if (compChoice == 0){
        compChoice = "Rock";
    }
    else if (compChoice == 1){
        compChoice = "Paper";
    }
    else if (compChoice == 2){
        compChoice = "Scissors";
    }
    else if (compChoice == 3){
        compChoice = "Lizard";
    }
    else if (compChoice == 4){
        compChoice = "Spock";
    }

    alert("You " + winLoseDraw + "\n" + "You chose: " + userChoice + "\n" + "Computer chose: " + compChoice);

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

}
