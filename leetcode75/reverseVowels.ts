function reverseVowels(s: string): string {
  
    const vowels = {
        "a": true,"e": true,"i": true,"o": true, "u": true,
        "A": true,"E": true,"I": true,"O": true, "U": true
    }

    let low = 0
    let high = s.length - 1

    const strArr = s.split("")

    while (low<high){
        if (vowels[strArr[low]] && vowels[strArr[high]]){
            const tmp = strArr[high]
            strArr[high] =strArr[low] 
            strArr[low] = tmp
        }else if (!vowels[s[low]]){
            low++
            continue
        }else{
            high--
            continue
        }
        low++
        high--
    }
    return strArr.join("")
};
