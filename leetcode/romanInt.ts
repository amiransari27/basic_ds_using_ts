function romanToInt(s: string): number {
    
    let ans: number = 0
    let i: number = 0
    while (i < s.length){

        if (s[i] === "M"){ 
            ans += 1000
        }else if (s[i] === "D"){
            ans += 500
        }else if (s[i] === "C" && i+1 < s.length && (s[i+1] === "D" || s[i+1] === "M")){
            ans -= 100
        }else if (s[i] === "C"){
            ans += 100
        }else if (s[i] === "L"){
            ans += 50
        }else if (s[i] === "X" && i+1 < s.length && (s[i+1] === "L" || s[i+1] === "C")){
            ans -= 10
        }else if (s[i] === "X"){
            ans += 10
        }else if (s[i] === "V"){
            ans += 5
        }else if (s[i] === "I" && i+1 < s.length && (s[i+1] === "X" || s[i+1] === "V")){
            ans -= 1
        }
        else if (s[i] === "I"){
            ans += 1
        }

        i++
    }

    return ans
};
