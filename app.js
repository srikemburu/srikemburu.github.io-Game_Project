// Variables
	var player1 = "Player 1";
	var player2 = "Player 2";
    var cnt1 = 0;
    var cnt2 = 0;

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
				document.querySelector("h1").innerHTML = "Draw!";
			}

			else if (randomNumber1 < randomNumber2) {
				document.querySelector("h1").innerHTML
								= (player2 + " Wins!");
                cnt2++;
                p2Stats.innerHTML = `Wins: ${cnt2}`

                if (cnt2 == 5){ 
                    document.querySelector("h1").innerHTML
								= (player2 + " is the WINNER!");
                                 
                cnt1 = 0;
                cnt2 = 0;
                     
                }
			}

			else {
				document.querySelector("h1").innerHTML
								= (player1 + " Wins!");
                cnt1++;
                p1Stats.innerHTML = `Wins: ${cnt1}`
                if (cnt1 == 5){ 
                    document.querySelector("h1").innerHTML
								= (player1 + " is the WINNER!");
                // p1Stats.innerHTML = `Wins: ${cnt1}`
                cnt1 = 0;
                cnt2 = 0;      
                             
                }
			}
		}, 1000);
	}

