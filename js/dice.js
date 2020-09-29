
function dicePlay() {
    var play1 = Math.floor(Math.random() * 6) + 1;
    //console.log(play1);
    var play1img = "img/dice" + play1 + ".jpg";
    var play1dice = document.querySelector("#check1");
    play1dice.src = play1img;

    //player 2 game   
    var play2 = Math.floor(Math.random() * 6) + 1;
        
    //console.log(play1);
    //var play2img = "img/dice"+ play2+".png";
    var play2img = `img/dice${play2}.jpg`;
    var play2dice = document.querySelector("#check2");
    play2dice.src = play2img;

    //condition
    if (play1 > play2) {
        var win = document.querySelector("h1");
        win.innerHTML="Player 1 Win";
        win.classList.add("animate__shakeY");

    }
    else if (play1 < play2) {
        document.querySelector("h1").innerHTML = "Player 2 Win";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";

    }
}
