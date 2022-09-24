const userInput = document.getElementById("userInput")
const convert = document.getElementById("convert")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convert.addEventListener("click", function(){
    let val = userInput.value

    //Length
    //meter value
    const meter = val * 3.281
    // feet value
    const feet = val / 3.281
    const answer1 = `${val} meters = ${meter.toFixed(3)} feet | ${val} feet = ${feet.toFixed(3)} meters`
    length.textContent = answer1

    //Volume
    //liters value
    const liters = val * 0.264
    const gallons = val / 0.264
    const answer2 = `${val} liters = ${liters.toFixed(3)} gallons | ${val} gallons = ${gallons.toFixed(3)} liters`
    volume.textContent = answer2

    //Mass
    //Kilogram Value
    const kilogram = val*2.204
    const pound = val / 2.204
    const answer3 = `${val} kilos = ${kilogram.toFixed(3)} pounds | ${val} pounds = ${pound.toFixed(3)} kilos`
    mass.textContent = answer3




    userInput.value = ""
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/