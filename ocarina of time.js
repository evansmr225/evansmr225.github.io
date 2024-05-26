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
    const image = document.getElementById("chest image");
    var rupeecounter = document.getElementById("rupeetext");
    var keycounter = document.getElementById("keytext");
    var candle = document.getElementById("candleimg");
    var chestOpened = false;

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

    if(localStorage.getItem("rupeeCollected") == "1")
    {
        chestOpened = true;
        image.src = "open chest.jpg";
    }

    image.addEventListener("click", function(){
        if(chestOpened == false && localStorage.getItem("bossKey") == "1")
        {
            chestOpened = true;
            localStorage.setItem("rupeeCollected", "1")
            localStorage.setItem("rupee", "1");
            image.src = "open chest rupee.jpg";
            const solvedSound = new Audio("oot puzzle solved.wav");
            solvedSound.play();

            localStorage.setItem("bossKey", "0");
            keycounter.textContent = ": 0";
            
            setTimeout(function(){
                image.src = "open chest.jpg";
                rupeecounter.textContent = ": 60";
            }, 2000);
        }
    })
})