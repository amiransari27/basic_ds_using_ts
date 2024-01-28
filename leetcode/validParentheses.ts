function isValid(s: string): boolean {
    const stack: string[] = []

    for (let i=0; i< s.length; i++){
        switch (s[i]){
            case "(" :
                stack.push(s[i])
                break
            case "{" :
                stack.push(s[i])
                break
            case "[":
                stack.push(s[i])
                break
            case ")":
                let t_1 = stack.pop()
                if (t_1 !== "("){
                    return false
                }
                break
            case "}":
                let t_2 = stack.pop()
                if (t_2 !== "{"){
    
                    return false
                }
                break
            case "]":
                let t_3 = stack.pop()
                if (t_3 !== "["){
                    return false
                }
                break
        }
    }
    return stack.length === 0
    
};

console.log(isValid("()[]{}"))
