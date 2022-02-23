// Variables
var player1 = "Player 1";
var player2 = "Player 2";
var player1WinCnt = 0;
var player2WinCnt = 0;
var roundCount = 0;
var newGame = false;

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");
    // Error Handling - check prompt input for null or empty value
    if (player1 != null && player1 != ""){
        document.querySelector("p.Player1").innerHTML = player1;
    }
    else {
        player1 = "Player 1";
        document.querySelector("p.Player1").innerHTML = player1;
    }

    if (player2 != null && player2 != ""){
        document.querySelector("p.Player2").innerHTML = player2;
    }
    else {
        player2 = "Player 2";
        document.querySelector("p.Player2").innerHTML = player2;
    }
}

// Function to roll the dice
function rollTheDice() {    
    var p1Stats = document.querySelector("#Player1Info")
    var p2Stats = document.querySelector("#Player2Info")
    var myImg1 = document.querySelector('#img1')
    var myImg2 = document.querySelector('#img2')
    var myH1 = document.querySelector("h1")
    var btnInfo = document.querySelector(".btn")

    if (newGame) {     // Reset styling for a new game
        player1WinCnt = 0;
        player2WinCnt = 0;      
        roundCount = 0; 
        myH1.style.color = "brown";
        myH1.innerHTML = ("Let's play");
        myImg1.setAttribute("src","images/dice6.png");
        myImg2.setAttribute("src","images/dice6.png");
        btnInfo.innerText = ("Roll the Dice");
        p1Stats.innerHTML = `Wins: ${player1WinCnt}`
        p2Stats.innerHTML = `Wins: ${player2WinCnt}`
        newGame = false;
    }
    else {            // Not a New Game
        roundCount++
        setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        myImg1.setAttribute("src","images/dice" + randomNumber1 + ".png");
        p1Stats.innerHTML = `Wins: ${player1WinCnt}`

        myImg2.setAttribute("src","images/dice" + randomNumber2 + ".png");
        p2Stats.innerHTML = `Wins: ${player2WinCnt}`

        if (randomNumber1 === randomNumber2) {
            myH1.innerHTML = ("Draw! Round " + roundCount);
        }
        // Player 2 won the round
        else if (randomNumber1 < randomNumber2) {
            myH1.innerHTML = (player2 + " Wins Round " + roundCount);
            player2WinCnt++;
            p2Stats.innerHTML = `Wins: ${player2WinCnt}`

            if (player2WinCnt == 5){
                myH1.style.color = "green";
                myH1.innerHTML = (player2 + " is the WINNER!");
                btnInfo.innerText = (" New Game?");
                newGame = true;      // Start a New Game
            }  // Player 2 won the game
        }   // player 2 won the round 
         
        else {     // Player 1 won the round
            myH1.innerHTML = (player1 + " Wins Round " + roundCount);
            player1WinCnt++;
            p1Stats.innerHTML = `Wins: ${player1WinCnt}`
            if (player1WinCnt == 5){ 
                myH1.style.color = "green";
                myH1.innerHTML = (player1 + " is the WINNER!");
                btnInfo.innerText = (" New Game?");
                newGame = true;             // Start a new game        
            }  // Player 1 won the game
        }      // player 1 won the round
    }, 1000);
  }  // Not a new game
}