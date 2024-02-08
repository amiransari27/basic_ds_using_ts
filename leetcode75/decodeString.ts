function decodeString(s: string): string {
    
    const stack: Array<string> = []

    for (let i=0; i< s.length; i++){

        if (s[i] !== "]"){
            stack.push(s[i])
        }else{
            let tmpStr = ""

            while (true){
                const char = stack.pop()
                if (char == "["){
                    break
                }
                tmpStr = `${char}${tmpStr}`
            }
            let occ = ""
            while(stack.length > 0){
                if (isNaN(Number(stack[stack.length - 1])) === true){
                    break
                }
                const c = stack.pop()
                occ = `${c}${occ}`
            }
               
            for (let j=0; j< Number(occ); j++){
                stack.push(tmpStr)
            }

        }
    }
    
    return stack.join("")
};




console.log(
    decodeString("10[ab]")
)
