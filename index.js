function changeImage(image){
    var randomNumber = Math.floor(Math.random()*6)+1;
    var images = "images/dice"+randomNumber+".png";
    document.getElementsByClassName(image)[0].setAttribute("src",images);
    return randomNumber;
    
}

function changeh1(random1,random2){
    if(random1>random2){
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    }
    else if(random2>random1){
        document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }

}


var number1  = changeImage("image1");
var number2 = changeImage("image2");
changeh1(number1,number2);