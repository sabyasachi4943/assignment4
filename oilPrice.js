function oilPrice(diesel, petrol, octane) {
  
  if ("number" == typeof (diesel) && "number" == typeof (petrol) && "number" == typeof (octane)) {
    const dieselPrice = diesel * 114;
    const petrolPrice = petrol * 130;
    const octanePrice = octane * 135;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;

    return totalPrice;
  } else {
    return `please provide amount in numbers`;
  }

}


console.log(oilPrice(1,1,1));
console.log(oilPrice(30,20,10));
console.log(oilPrice(1,0,2));
console.log(oilPrice('ggg',0,2));
console.log(oilPrice(0,2,3));
