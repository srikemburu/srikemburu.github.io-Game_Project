// Variables
	var player1 = "Player 1";
	var player2 = "Player 2";
    var cnt1 = 0;
    var cnt2 = 0;
    var roundCount = 0;
    var newGame = false;

	// Function to change the player name
	function editNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");
		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
	}

	// Function to roll the dice
	function rollTheDice() {        
        let p1Stats = document.querySelector("#Player1Info")
        let p2Stats = document.querySelector("#Player2Info")

        if (newGame) {     // Reset styling for a new game
            cnt1 = 0;
            cnt2 = 0;      
            roundCount = 0; 
            document.querySelector("h1").style.color = "brown";
            document.querySelector("h1").innerHTML = ("Let's play");
            document.querySelector("button").innerText = ("Roll the Dice");
            document.querySelector("button").style.background='Brown';
            document.querySelector("#img1").setAttribute("src","images/dice6.png"); 
            document.querySelector("#img2").setAttribute("src","images/dice6.png");
            p1Stats.innerHTML = `Wins: ${cnt1}`
            p2Stats.innerHTML = `Wins: ${cnt2}`
            newGame = false;
        }
        else {            // Not a New Game
            roundCount++
		    setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			var randomNumber2 = Math.floor(Math.random() * 6) + 1;

			document.querySelector("#img1").setAttribute("src",
				"images/dice" + randomNumber1 + ".png");

            p1Stats.innerHTML = `Wins: ${cnt1}`
                
			document.querySelector("#img2").setAttribute("src",
				"images/dice" + randomNumber2 + ".png");

            p2Stats.innerHTML = `Wins: ${cnt2}`

			if (randomNumber1 === randomNumber2) {
				document.querySelector("h1").innerHTML = ("Draw! Round " + roundCount);
			}
            // Player 2 won the round
			else if (randomNumber1 < randomNumber2) {
				document.querySelector("h1").innerHTML
								= (player2 + " Wins Round " + roundCount);
                cnt2++;
                p2Stats.innerHTML = `Wins: ${cnt2}`

                if (cnt2 == 5){ 
                    document.querySelector("h1").style.color = "green";
                    document.querySelector("h1").innerHTML
								= (player2 + " is the WINNER!");
                    document.querySelector("button").innerText = ("Start New Game");
                    document.querySelector("button").style.background='Blue'; 
                    newGame = true;      // Start a New Game
                }  // Player 2 won the game
			}   // player 2 won the round 
             
			else {     // Player 1 won the round
				document.querySelector("h1").innerHTML
								= (player1 + " Wins Round " + roundCount);
                cnt1++;
                p1Stats.innerHTML = `Wins: ${cnt1}`
                if (cnt1 == 5){ 
                    document.querySelector("h1").style.color = "green";
                    document.querySelector("h1").innerHTML
								= (player1 + " is the WINNER!");
                    document.querySelector("button").innerText = ("Start New Game");
                    document.querySelector("button").style.background='Blue'; 
                    newGame = true;             // Start a new game        
                }  // Player 1 won the game
			}      // player 1 won the round
		}, 1000);
      }  // Not a new game
	}