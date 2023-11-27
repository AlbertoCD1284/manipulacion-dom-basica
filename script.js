const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#resultado')
const btn = document.querySelector('#btnCalcular');

form.addEventListener('submit', sumarInputValues);
function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    // console.log(Number(input1.value) + Number(input2.value));
    input3.value = Number(input1.value) + Number(input2.value);
}