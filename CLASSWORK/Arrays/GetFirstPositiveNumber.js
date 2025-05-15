const input = [2,3,4,6,7];
let max = 0
for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    max = Math.max(input[i]);
    input[i] -= 1;


}
console.log(input[i]);
console.log(max)