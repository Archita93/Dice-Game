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
    
}


changeImage("image1");
changeImage("image2");