const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchagne rates and update the DOM
function caclulate(){
const currency_one = currencyEl_one.value;
const currency_two = currencyEl_two.value;
 // Exchangerate API
 fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        // Here we Get The value of Currency two 
    const rate = data. rates[currency_two];
        
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    
        // used tofixed to get 2 number after "." in value 
    amountEl_two.value = ( amountEl_one.value * rate ).toFixed(2);
    });
}
 

//Event listeners

currencyEl_one.addEventListener('change', caclulate );
amountEl_one.addEventListener('input', caclulate );
currencyEl_two.addEventListener('change', caclulate );
amountEl_two.addEventListener('input', caclulate );
//  we used ES6 to swap currency elements
swap.addEventListener('click' , () => {
    [currencyEl_one.value, currencyEl_two.value] = [currencyEl_two.value, currencyEl_one.value];
})

caclulate();