function publicBusFare(passengerNumber) {
  if ("number" == typeof (passengerNumber)) {
    
    const remainbus = passengerNumber % 50;
    const remainmbus = remainbus % 11;
    const public = remainmbus;
  
    return public * 250;
  } else {
    return `please provide a number`;
  }
}

console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare('ghjk'));
console.log(publicBusFare(112));
console.log(publicBusFare(235));
console.log(publicBusFare(365));
