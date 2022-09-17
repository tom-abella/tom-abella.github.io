let statusEl = document.getElementById("status-el");
let cardEl = document.getElementById("cards-el");
let infoEl = document.getElementById("info-el");
let sumEl = document.getElementById("sum-el")
let firstCard = 0;
let secondCard = 0;
let cards = [];
let sum = 0;
let alive = true;
let blackjack =false;
let person = {
    name: " ",
    money: 200
}
//user nameHello
let user = prompt("Enter your Name: ");
person.name = user;
infoEl.textContent = person.name + " : "+ person.money;

//instruction
alert("INSTRUCTION: \nYour Card should get exactly 21. \nif you get a total of 21 you will be added by 300 points.\nif not you will be deducted by 10 points. ");

// random card
function randomCard(){
    let random = Math.floor(Math.random()*13)+1;
    if(random ===1){
        return 11;
    }
    else if(random >10){
        return 10;
    }
    else{
    return random;
    }
}

//start game
function startGame(){
    alive = true;
    blackjack = false;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    cardEl.textContent = "Cards: ";
    for(let count = 0; count< cards.length; count++){
        cardEl.textContent += cards[count] + " ";
    }
    sumEl.textContent = "Sum: " +  sum;

    if(sum < 21){
        statusEl.textContent = "Wand to draw a new card? ";
    }
    else if(sum === 21){
        statusEl.textContent = "Congratulations! You've got a black Jack!";
        alert("Congratulations!");
        person.money += 300;
        infoEl.textContent = person.name + " : " +person.money;
        blackjack = true;
    }
    else{
        statusEl.textContent = "You're out of the game!"
        alive = false;
        person.money -= 10;
        infoEl.textContent = person.name + " : " +person.money;
    }
}
    


//New Card
function newGame(){
    if(alive === true && blackjack===false){
        let newCard = randomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
    }
   