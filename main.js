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
    var candle = document.getElementById("candleimg");
    var rupeecounter = document.getElementById("rupeetext");
    var keycounter = document.getElementById("keytext");
    const bush = document.querySelectorAll('.bushimg');
    const specialBush = document.getElementById("specialbush");
    var hasBurned = false;

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
        candle.src = "blue candle.png";
    } 
    else
    {
        candle.src = "Empty.png";
    }

    if(localStorage.getItem("secret") == "1")
    {
        specialBush.src = specialBush.getAttribute('data-new-image');
    } 
    else
    {
        specialBush.src = "bush.png";
    }

    function handleClickBush(event)
    {
        const clickedElement = event.target;
        const newImageSrc = clickedElement.getAttribute('data-new-image');
        if(localStorage.getItem("candle") == 1 && hasBurned == false)
        {
            hasBurned = true;
            clickedElement.src = "fire.gif";
            const fireAudio = new Audio("candle.wav");
            fireAudio.play();

            setTimeout(function(){
                clickedElement.src = newImageSrc;
            }, 1500);
        }
    }

    bush.forEach(element => {
        element.addEventListener('click', handleClickBush);
    });

    specialBush.addEventListener('click', function(){
        if(localStorage.getItem("secret") == "1" && specialBush.getAttribute("src") == specialBush.getAttribute('data-new-image'))
        {
            window.location.href = 'secret.html';
        }
        else if(localStorage.getItem("candle") == 1 && hasBurned == false)
        {
            hasBurned = true;
            specialBush.src = "fire.gif";
            localStorage.setItem("secret", "1");
            const fireAudio = new Audio("candle.wav");
            fireAudio.play();

            setTimeout(function(){
                specialBush.src = specialBush.getAttribute('data-new-image');
                const solvedSound = new Audio("lz puzzle solved.wav");
                solvedSound.play();
            }, 1500);
        }
    })
})