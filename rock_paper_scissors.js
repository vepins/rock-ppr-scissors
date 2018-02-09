//IT WORKS!!!!!!!! 

"use strict";


var playerOneScore = 0;
var playerTwoScore = 0;

while (playerOneScore <= 3 && playerTwoScore <= 3){
  //the weapon choices
  var weapons = ["rock", "paper", "scissors"];

    //do we need player names?
  var playerOneName = 'OG';
  var playerTwoName = 'The Challenger';

  //ask the player for weapon choice:
  var playerOneWeapon = weapons[parseInt(Math.random() * weapons.length) % 3];
  var playerTwoWeapon = weapons[parseInt(Math.random() * weapons.length) % 3];


  console.log(playerOneName + " chose " + playerOneWeapon + ". " + playerTwoName + " chose " + playerTwoWeapon + ".");


  if (playerOneScore === 3) {
    console.log(playerOneName + " wins!");
  } else if (playerTwoScore === 3) {
    console.log(playerTwoName + " wins!");
  } else if (playerOneWeapon === playerTwoWeapon) {
    console.log("It's a tie!");
  }

  //the game
  if(playerOneWeapon === 'rock' && playerTwoWeapon === 'scissors') {
    playerOneScore++;
  } else if (playerOneWeapon === 'scissors' && playerTwoWeapon == 'paper'){
    playerOneScore++;
  } else if (playerOneWeapon === 'paper' && playerTwoWeapon == 'rock'){
    playerOneScore++;
  } else if (playerOneWeapon === playerTwoWeapon) {

  } else {
    playerTwoScore++;
  }

    //score update
  var roundScore = console.log(playerOneName +  "'s score is " +  playerOneScore + ". " + playerTwoName + "'s score is " + playerTwoScore + ".");

  if (playerOneScore === 3){
    console.log("The final winner is " + playerOneName + "!");
  } else if (playerTwoScore === 3) {
    console.log("The final winner is " + playerTwoName + "!");
  }

  if (playerOneScore === 3 || playerTwoScore === 3) {
    break;
  }

}
