module.exports = function multiply(first, second) {
  const length1 = first.length;
  const length2 = second.length;
  let products = [];

  first = first.split('').reverse().join('');
  second = second.split('').reverse().join('');

  for (let i = 0; i < length2; i++) {
    let num = '';
    let decimal = 0;

    if (i > 0) {
      for (let k = 0; k < i; k++){
        num += '0';
      }
    }

  for (let j = 0; j < length1; j++) {
    let product = second[i] * first[j] + decimal;

    if( j === length1 - 1) {
       num += String(product).split('').reverse().join('');
       break;
    }

    num += product % 10;

    decimal = Math.floor(product / 10);
  }
    products.push(num);
  }

  let previous = '';
  let result = '';
  let decimal = 0;

  products.forEach((val, ind, ar) => {
   if(ind === 0) {
 	   return previous = val;
   }

    for (let i = 0; i < val.length; i++){
      let sum = (+previous[i] || 0) + +val[i] + decimal;
      if( i === val.length - 1){
        result += String(sum).split('').reverse().join('');
        decimal = 0;
        continue;
      }
      result += sum % 10;
      decimal = Math.floor(sum / 10);
    }

 	  previous = result;
 	  result = '';
  });

  return previous.split('').reverse().join('');
}
