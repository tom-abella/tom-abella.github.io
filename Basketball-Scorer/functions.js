let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");
let winner = document.getElementById("winner");
let finalText_1 = document.getElementById("final-1");
let finalText_2 = document.getElementById("final-2");
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
    let final_1 = "Home: "+scoreHome;
    let final_2 = "Guest: "+scoreGuest;
    let final = "Final Score: ";
    let finals = final_1 +" "+  final_2;
    finalText_1.textContent = final;
    finalText_2.textContent = finals;
}
//New Game
function newGame(){
    finalText_1.textContent = "";
    finalText_2.textContent = "";
    winner.textContent = "";
    scoreHome = 0;
    scoreGuest = 0;
    guestScore.textContent = scoreGuest;
    homeScore.textContent = scoreHome;
}