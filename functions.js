let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");
let winner = document.getElementById("winner");
let finalText = document.getElementById("final");
let scoreHome = 0;
let scoreGuest = 0;

//one
function oneHome(){
    scoreHome +=1;
    homeScore.textContent = scoreHome;
}
function oneGuest(){
    scoreGuest +=1;
    guestScore.textContent = scoreGuest;
}

//two
function twoHome(){
    scoreHome +=2;
    homeScore.textContent = scoreHome;
}
function twoGuest(){
    scoreGuest+=2;
    guestScore.textContent = scoreGuest;
}

//three
function threeHome(){
    scoreHome +=3;
    homeScore.textContent = scoreHome;
}
function threeGuest(){
    scoreGuest +=3;
    guestScore.textContent = scoreGuest;
}
//End game
function endGame(){
    if(scoreHome > scoreGuest){
        winner.textContent = "The winner is Home! ";
    }
    else if(scoreHome == scoreGuest){
        winner.textContent = "Tie";
    }
    else{
        winner.textContent = "The winner is Guest! ";
    }
    let final = "Final Score: \n Home: "+scoreHome+"\n Guest: "+scoreGuest;
    finalText.textContent = final;
    scoreHome = 0;
    scoreGuest = 0;
    guestScore.textContent = scoreGuest;
    homeScore.textContent = scoreHome;
}
//New Game
function newGame(){
    final.textContent = "";
    winner.textContent = "";
    scoreHome = 0;
    scoreGuest = 0;
    guestScore.textContent = scoreGuest;
    homeScore.textContent = scoreHome;
}