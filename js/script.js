console.log("Cześć!");

let cashElement = document.querySelector(".js-cash");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("input", () => {
    let cash = cashElement.value;
    let exchangeRate = exchangeRateElement.value;
    let result = cash * exchangeRate
    resultElement.innerText = `${cash} PLN = ${result.toFixed(2)} Euro`;
})