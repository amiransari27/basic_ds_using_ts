function letterCombinations(digits: string): string[] {
    if (digits.length == 0) {
        return []
    }
    
    const db: {[digit: string]: string} = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    let ans: string[] = [""]

    for (let i=0; i< digits.length; i++){
        const char = digits[i]
        const str = db[char]
        const tmpStrs: string[] = []
        for (let j=0; j<str.length; j++){
            for (let k=0; k< ans.length; k++){
                let tmp = `${ans[k]}${str[j]}`
                tmpStrs.push(tmp)
            }
        }
        console.log(tmpStrs)
        ans = tmpStrs
    }

    return ans    
};

function letterCombinationsRec(digits: string): string[] {
    if (digits.length == 0) {
        return []
    }
    
    const db: {[digit: string]: string} = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    function soluttion(idx: number): string[]{
        if (idx>= digits.length){
            return [""]
        }

        const ans: string[] = []
        const tmpStr = soluttion(idx+1)
        const char = digits[idx]
        const str = db[char]
        for (let i= 0; i< tmpStr.length;i++){
            for (let k = 0; k< str.length; k++){
                ans.push(`${str[k]}${tmpStr[i]}`)
            }
        }
        return ans
    }


    return soluttion(0)
}


console.log(
    letterCombinationsRec("23")
)
