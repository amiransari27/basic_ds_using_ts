function intToRoman(num: number): string {
    
const nums: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let res = "";

  for (let i = 0; i < 13; i++) {

    let times = Math.floor(num/ nums[i])

    while (times > 0){
        res += syms[i]
        times--
    }
    num = num%nums[i]
    

  }

  return res 
};