const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.getElementById("passwordOne");
let password2 = document.getElementById("passwordTwo");
let newLength = document.getElementById("number").value;

function generatePassword(){
    password1.textContent = "";
    password2.textContent = "";

    for(let count = 1; count<=15; count++){
        let random1 = Math.floor(Math.random()*characters.length);
        let random2 = Math.floor(Math.random()*characters.length);
        password1.textContent += characters[random1];
        password2.textContent += characters[random2];
    }
}