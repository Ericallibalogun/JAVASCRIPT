const {findHCF} = require("./HighestCommonfactor");

test("find lcm of the numbers",() =>{
    const numbers = [12,24,18]
    const hcf = 6
    const result = findHCF(numbers);
    expect(result).toEqual(hcf);
})