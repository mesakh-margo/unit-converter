/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputEl.value)

    const leftHand = inputValue <= 1 ? ["meter", "foot", "liter", "gallon", "kilo", "pound"] : ["meters", "feet", "liters", "gallons", "kilos", "pounds"]

    const magnitude = Number.isInteger(inputValue) ? inputValue : inputValue.toFixed(2)

    const meterToFoot = (inputValue * 3.281).toFixed(2)
    const footToMeter = (inputValue * 0.3048).toFixed(2)
    const literToGallon = (inputValue * 0.264).toFixed(2)
    const gallonToLiter = (inputValue * 3.78541).toFixed(2)
    const kiloToPound = (inputValue * 2.204).toFixed(2)
    const poundToKilo = (inputValue * 0.453592).toFixed(2)

    let rightHand = meterToFoot <= 1 ? ["foot"] : ["feet"]
    rightHand.push(footToMeter <= 1 ? "meter" : "meters")
    rightHand.push(literToGallon <= 1 ? "gallon" : "gallons")
    rightHand.push(gallonToLiter <= 1 ? "liter" : "liters")
    rightHand.push(kiloToPound <= 1 ? "pound" : "pounds")
    rightHand.push(poundToKilo <= 1 ? "kilo" : "kilos")

    lengthEl.innerHTML = `
    <h4 class="title">Length (Meters/Feet)</h4>
    <p class="result">${magnitude} ${leftHand[0]} = ${meterToFoot} ${rightHand[0]} | ${magnitude} ${leftHand[1]} = ${footToMeter} ${rightHand[1]}</p>`
    volumeEl.innerHTML = `
    <h4 class="title">Volume (Liters/Gallons)</h4>
    <p class="result">${magnitude} ${leftHand[2]} = ${literToGallon} ${rightHand[2]} | ${magnitude} ${leftHand[3]} = ${gallonToLiter} ${rightHand[3]}</p>`
    massEl.innerHTML = `
    <h4 class="title">Mass (Kilograms/Pounds)</h4>
    <p class="result">${magnitude} ${leftHand[4]} = ${kiloToPound} ${rightHand[4]} | ${magnitude} ${leftHand[5]} = ${poundToKilo} ${rightHand[5]}</p>`
})

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertBtn.click();
    }
})