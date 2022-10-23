 
// This is a form with different controls to choose from
const search = document.querySelector(".searchBox");
const convert = document.querySelector(".convert");
const fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
const finalValue = document.querySelector(".finalValue");
const finalAmount = document.getElementById("finalAmount");
let resultFrom;
var resultTo;
var searchValue;
  
// EventListener when currency is changed
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
// EventListener when currency is changed
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
// Function for updating the value
function updateValue(e) {
    searchValue = e.target.value;
}
  
// When the user clicks, it calls function get results 
convert.addEventListener("click", getResults);
  
// This function gets the results and includes an API call 
const api = "https://api.exchangerate-api.com/v4/latest/USD";
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
// This function displays results after convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
  
//This function clears the form when the user clicks clear button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};