num = 180890786789675765456456564645

let startTime = performance.now();
console.log(num % 2 == 0 ? "Even" : "Odd");
let endTime = performance.now();
console.log(`${(endTime - startTime)} ms`);

startTime = performance.now();
console.log((num & 1) == 0 ? "Even" : "Odd");
endTime = performance.now();
console.log(`${(endTime - startTime).toFixed(4)} ms`);



