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

if(!localStorage.getItem("secret")){
    localStorage.setItem("secret", "0");
}

document.addEventListener("DOMContentLoaded", function(){
    const image = document.getElementById("keyimage");
    var keycounter = document.getElementById("keytext");
    var rupeecounter = document.getElementById("rupeetext");
    var candle = document.getElementById("candleimg");
    var keyCollected = false;


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

    if(localStorage.getItem("keyCollected") == "1")
    {
        image.src = "Empty.png";
        keyCollected = true;
    }

    image.addEventListener("click", function(){
        console.log(localStorage);
        
        if(keyCollected == false)
        {
           
            image.src = "Empty.png";
            localStorage.setItem("keyCollected", "1");
            localStorage.setItem("bossKey", "1");
            keycounter.textContent = ": 1";
            keyCollected = true;
            const soundEffect = new Audio("botw puzzle solved.mp3");
            soundEffect.play();
        }
    })
})