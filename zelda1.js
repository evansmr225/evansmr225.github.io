if(!localStorage.getItem("keyCollected")){
    localStorage.setItem("keyCollected", "0");
}

if(!localStorage.getItem("rupeeCollected")){
    localStorage.setItem("rupeeCollected", "0");
}

if(!localStorage.getItem("bossKey")){
    localStorage.setItem("bossKey", "0");
}

if(!localStorage.getItem("rupee")){
    localStorage.setItem("rupee", "0");
}

if(!localStorage.getItem("candle")){
    localStorage.setItem("candle", "0");
}

if(!localStorage.getItem("secret")){
    localStorage.setItem("secret", "0");
}

document.addEventListener("DOMContentLoaded", function(){
    const image = document.getElementById("shopCandle");
    var candle = document.getElementById("candleimg");
    var rupeecounter = document.getElementById("rupeetext");
    var keycounter = document.getElementById("keytext");

    if(localStorage.getItem("bossKey") == "1")
    {
        keycounter.textContent = ": 1";
    } 
    else
    {
        keycounter.textContent = ": 0";
    }

    if(localStorage.getItem("rupee") == "1")
    {
        rupeecounter.textContent = ": 60";
    } 
    else
    {
        rupeecounter.textContent = ": 0";
    }

    if(localStorage.getItem("candle") == "1")
    {
        candle.src = "blue candle.png"
    } 
    else
    {
        candle.src = "Empty.png";
    }

    image.addEventListener("click", function(){
        if(localStorage.getItem("rupee") == 1)
        {
            localStorage.setItem("candle", "1");
            candle.src = "blue candle.png"
            const solvedSound = new Audio("lz puzzle solved.wav");
            solvedSound.play();
            
            localStorage.setItem("rupee", "0");
            rupeecounter.textContent = ": 0";
        }
    })
})