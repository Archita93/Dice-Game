function changeImage(image){
    var randomNumber = Math.floor(Math.random()*6)+1;
    if(randomNumber==1){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice1.png")
        console.log("it is one");
    }
    else if(randomNumber==2){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice2.png")
        console.log("it is two");
    }
    else if(randomNumber==3){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice3.png")
        console.log("it is three");
    }
    else if(randomNumber== 4){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice4.png")
        console.log("it is four");
    }
    else if(randomNumber==5){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice5.png")
        console.log("it is four");
    }
    else {
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice6.png")
        console.log("it is five");
    }
    return randomNumber;
    
}

function changeh1(random1,random2){
    if(random1>random2){
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    }
    else if(random2>random1){
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }

}


var number1  = changeImage("image1");
var number2 = changeImage("image2");
changeh1(number1,number2);