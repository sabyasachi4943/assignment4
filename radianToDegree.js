function radianToDegree(radian) {
 if ("number" == typeof radian) {
   const pi = Math.PI;
   radianToDegrees = radian * (180 / pi);
   return radianToDegrees.toFixed(2);
 } else {
   return `please provide a number`;
 }
}

console.log(radianToDegree(0.7853981633974483));
console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree(199));
console.log(radianToDegree("4577"));
