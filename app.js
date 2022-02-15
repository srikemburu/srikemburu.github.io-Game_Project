
	// Player name
	var player1 = "Player 1";
	var player2 = "Player 2";

	// Function to change the player name
	function editNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");

		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
	}

	// Function to roll the dice
	function rollTheDice() {
		setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			var randomNumber2 = Math.floor(Math.random() * 6) + 1;

            var myImg1 = document.querySelector('img1')
            var myImg2 = document.querySelector('img2')

            var path;
            var ArrayImage = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

            // srikemburu.github.io-Game_Project\images\dice1.png
            // C:\Users\kembu\srikemburu.github.io\srikemburu.github.io-Game_Project\images\dice2.png


            path = ArrayImage[randomNumber1-1];
            console.log (path)
            myImg1.setAttribute("src",path);

            path = ArrayImage[randomNumber2-1];
            myImg2.setAttribute("src",path);

            // myImg1.setAttribute("src",
            // "images%2fdice" + randomNumber1 + ".png");
            // myImg2.setAttribute("src",
            // "images%2fdice" + randomNumber2 + ".png");

        //    var rn1 = randomNumber1-1
        //     switch (rn1){
        //         case 0:
        //             myImg1.setAttribute("src","images%2fdice1.png");       
        //             break;
        //         case 1:
        //             myImg1.setAttribute("src","images%2fdice2.png"); 
        //             break;
        //         case 2:
        //             myImg1.setAttribute("src","images%2fdice3.png");       
        //             break;
        //         case 3:
        //             myImg1.setAttribute("src","images%2fdice4.png"); 
        //             break;
        //         case 4:
        //             myImg1.setAttribute("src","images%2fdice5.png");       
        //             break;
        //         case 5:
        //             myImg1.setAttribute("src","images%2fdice6.png"); 
        //             break;
        //     }


			// document.querySelector(".img1").setAttribute("src",
			// 	"images/dice" + randomNumber1 + ".png");
                
			// document.querySelector(".img2").setAttribute("src",
			// 	"images/dice" + randomNumber2 + ".png");

			if (randomNumber1 === randomNumber2) {
				document.querySelector("h1").innerHTML = "Draw!";
			}

			else if (randomNumber1 < randomNumber2) {
				document.querySelector("h1").innerHTML
								= (player2 + " WINS!");
			}

			else {
				document.querySelector("h1").innerHTML
								= (player1 + " WINS!");
			}
		}, 2500);
	}

