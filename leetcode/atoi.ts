{
    function myAtoi(s: string): number {
            s = s.trim()

            if(s.length === 0){
                return 0
            } 

            let ans: number = 0
            let isNeg: boolean = false
            for (let i=0; i<s.length;i++){
                let char = s.charAt(i)
                console.log(char)

                if (i === 0){
                    if (char === "-"){
                        isNeg = true
                        continue
                    }else if (char === "+"){
                        isNeg = false
                        continue
                    }
                }

                if (char >= "0" && char <= "9"){
                    let digit = char.charCodeAt(0) - "0".charCodeAt(0)
                    
                    ans = (ans*10 + digit)
        
                }else{
                    break
                }

            }  
            ans = isNeg ? -ans: ans

            if (ans < Math.pow(-2, 31)){
                return Math.pow(-2, 31)
            }else if(ans > Math.pow(2, 31) - 1) {
                return Math.pow(2, 31) - 1
            }

            return ans
    }

    console.log(myAtoi("+-1234"))
}
