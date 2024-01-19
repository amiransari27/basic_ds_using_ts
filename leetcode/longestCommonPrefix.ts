function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1){
        return strs[0]
    }
    const fStr = strs[0]
    if (fStr.length == 0) {
        return fStr
    }
    let idx = 0
    let check = true
    while(check){
        check = false

        let tmpCheck = true
        for (let i=1; i<strs.length; i++){
            if (fStr[idx] !== strs[i][idx]){
                tmpCheck = false
            }
            if (!tmpCheck){
                break
            }
        }
        if(idx > fStr.length-1){
            break
        }
        if(tmpCheck){
           check =true
           idx++ 
        }
         
        
    }
    
    return fStr.slice(0, idx)
};

console.log(
    longestCommonPrefix(["flower","flower","flower","flower"])
)
