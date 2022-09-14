let count = document.getElementById("num");
let saveDataCount = document.getElementById("saveData");
let value = 0;
function increment(){
    value +=1;
    count.textContent=value;
}
function decrement(){
    value-=1;
    count.textContent = value;
}
function save(){
    let data = value + " - ";
    saveDataCount.textContent += data;
    value = 0;
    count.textContent = value;
}
function reset(){
    saveDataCount.textContent = "Save Data: ";
    count.textContent = 0;
}