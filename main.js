let input = document.querySelector('.input');
let output = document.querySelector('.output');
let convert = document.querySelector('.convert');
let inputValue;
let converted;
let dec;
let decValue = [];
let binValue = 2;
let decimal = 0;


convert.addEventListener('click', () => {
  inputValue = input.value;

  converted = convertToDec(inputValue);

  output.value = converted;

  if (output.value === "Invalid") {
    output.classList.add('warning');
  } else {
    output.classList.remove('warning');
  }

  dec = 0;
  decValue = [];
  decimal = 0;
});

function convertToDec(bin) {
  dec = bin.split('');

  dec.forEach((e, i) => {
    decValue.push(Math.pow(binValue, i));
  });

  dec.forEach((e, i) => {
    if (e === '1' || decValue[i] === 1) {
      decimal += decValue[i];
    }
  });

  return decimal;
}