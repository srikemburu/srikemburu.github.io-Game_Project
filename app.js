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
        let btnInput = document.querySelector(".btn")
        const btn1 = document.getElementById("btn");

        if (newGame) {
            document.querySelector("h1").innerHTML = ("Let's play");
            document.querySelector("button").innerText = ("Roll the Dice");
            document.querySelector("button").style.background='Brown';
            // document.querySelector("button").style.hover.background='Brown';
            document.querySelector("#img1").setAttribute("src","images/dice6.png"); 
            document.querySelector("#img2").setAttribute("src","images/dice6.png");
            p1Stats.innerHTML = `Wins: ${cnt1}`
            p2Stats.innerHTML = `Wins: ${cnt2}`
            newGame = false;
            console.log("roundCount = " + roundCount)
        }

        else {
        roundCount++
		setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			var randomNumber2 = Math.floor(Math.random() * 6) + 1;

            // var myImg1 = document.querySelector('#img1')
            // var myImg2 = document.querySelector('#img2')

			document.querySelector("#img1").setAttribute("src",
				"images/dice" + randomNumber1 + ".png");

            p1Stats.innerHTML = `Wins: ${cnt1}`
                
			document.querySelector("#img2").setAttribute("src",
				"images/dice" + randomNumber2 + ".png");

            p2Stats.innerHTML = `Wins: ${cnt2}`

			if (randomNumber1 === randomNumber2) {
				document.querySelector("h1").innerHTML = ("Draw! Round " + roundCount);
			}

			else if (randomNumber1 < randomNumber2) {
				document.querySelector("h1").innerHTML
								= (player2 + " Wins Round " + roundCount);
                cnt2++;
                p2Stats.innerHTML = `Wins: ${cnt2}`

                if (cnt2 == 5){ 
                    document.querySelector("h1").innerHTML
								= (player2 + " is the WINNER!");

                    document.querySelector("button").innerText = ("Start New Game");
                    document.querySelector("button").style.background='Blue'; 
                    // document.querySelector("button").setAttribute("class", "btn")
                    // document.getElementById('btn').style.background='Blue'; 
                    // document.querySelector("button").value = "blue";
                
                // Reset all variables to start a new game
                newGame = true;  
                cnt1 = 0;
                cnt2 = 0;
                roundCount = 0;     
                }
			}

			else {
				document.querySelector("h1").innerHTML
								= (player1 + " Wins Round " + roundCount);
                cnt1++;
                p1Stats.innerHTML = `Wins: ${cnt1}`
                if (cnt1 == 5){ 
                    document.querySelector("h1").innerHTML
								= (player1 + " is the WINNER!");
                    document.querySelector("button").innerText = ("Start New Game");
                    document.querySelector("button").style.background='Blue'; 
                    // document.querySelector("button").setAttribute("class", "btn")
                    // document.getElementById('btn').style.background='Blue'; 
                    // document.querySelector("button").value = "blue";

                // Reset all variables to start a new game
                newGame = true;         
                cnt1 = 0;
                cnt2 = 0;      
                roundCount = 0;             
                }
			}
		}, 1000);
    }
	}

