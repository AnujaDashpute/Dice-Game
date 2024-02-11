// Code for Player 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "Images/Dice"+ randomNum1 +".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);



//Code for Player 2

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "Images/Dice"+randomNum2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

//Code for Player 3

var randomNum3 = Math.floor(Math.random() * 6) + 1;
var randomImage3 = "Images/Dice"+randomNum3+".png";

var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImage3);

//Main Logic to decide winner

if(randomNum1 > randomNum2 && randomNum1 > randomNum3)
{
	document.querySelector("h2").innerHTML = "Player 1 Wins !";
}
else if(randomNum2 > randomNum1 && randomNum2 > randomNum3)
{
	document.querySelector("h2").innerHTML = "Player 2 Wins !";
}
else if(randomNum3 > randomNum1 && randomNum3 > randomNum2)
{
	document.querySelector("h2").innerHTML = "Player 3 Wins !";
}
else
{
	document.querySelector("h2").innerHTML = "Tie !";
}