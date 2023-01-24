var randomNumber1 = Math.floor(Math.random()*5+1);
var randomNumber2 = Math.floor(Math.random()*5+1);


var image1src = "images/dice" +randomNumber1+ ".png";
var image2src = "images/dice" +randomNumber2+ ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute('src', image1src);
img2.setAttribute('src', image2src)

if(randomNumber1 > randomNumber2 ){
    document.querySelector(".result").innerHTML = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector(".result").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector(".result").innerHTML = "Drawn";
}