
// Form controls to select from
const search = document.querySelector(".searchBox");
const convert = document.querySelector(".convert");
const fromCurrecy = document.querySelector(".from");
const toCurrecy = document.querySelector(".to");
const finalValue = document.querySelector(".finalValue");
const finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

// EventListener when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}
  
// when user clicks, it calls function get the results 
convert.addEventListener("click", getResults);
  
// function to get results including an API for currency conversion

const api = "https://api.exchangerate-api.com/v4/latest/USD";
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
// display results after convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
  
// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};