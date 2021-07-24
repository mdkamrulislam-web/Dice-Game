/* Second Attempted method */

  /*Left Dice*/
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice4.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice4.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  /*Right Dice*/
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = "👑 Player 1 Wins!";
  }
  if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerText = "Player 2 Wins! 👑";
  }
  if(randomNumber2===randomNumber1){
    document.querySelector("h1").innerText = "Draw!";
  }


/* First Attempted method */

// var randomNumber1 = Math.floor(((Math.random())*6)+1);
// var randomNumber2 = Math.floor(((Math.random())*6)+1);
//
// if(randomNumber1===1){
//   document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// if(randomNumber1===2){
//   document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// if(randomNumber1===3){
//   document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// if(randomNumber1===4){
//   document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// if(randomNumber1===5){
//   document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// if(randomNumber1===6){
//   document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
//
// if(randomNumber2===1){
//   document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// if(randomNumber2===2){
//   document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// if(randomNumber2===3){
//   document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// if(randomNumber2===4){
//   document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// if(randomNumber2===5){
//   document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// if(randomNumber2===6){
//   document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
//
// if(randomNumber1>randomNumber2){
//   document.querySelector("h1").innerText = "Player 1 Wins!";
// }
// if(randomNumber2>randomNumber1){
//   document.querySelector("h1").innerText = "Player 2 Wins!";
// }
// if(randomNumber2===randomNumber1){
//   document.querySelector("h1").innerText = "Tie";
// }
