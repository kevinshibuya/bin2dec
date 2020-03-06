let input = document.querySelector('.input');
let output = document.querySelector('.output');
let convert = document.querySelector('.convert');
let clipboard = document.querySelector('.clipboard');

convert.addEventListener('click', () => {
  let inputValue = input.value;
  
  let regex = new RegExp('[^0-1]');

  let converted = regex.test(inputValue) ? 'Enter a valid binary number' : convertToDec(inputValue);

  output.value = converted;
});

clipboard.addEventListener('click', () => {
  let selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

  output.select();

  document.execCommand('copy');

  if (selected) {
    document.getSelection().removeAllRanges();

    document.getSelection().addRange(selected);
  }
});

function convertToDec(bin) {
  const dec = bin.split('').reverse();
  let decimal = 0;

  dec.forEach((e, i) => {
    if (e === '1') {
      decimal += Math.pow(2, i);
    }
  });

  return decimal;
}