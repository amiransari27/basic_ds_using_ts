{
    function isPalindrome(x: number): boolean {
        if (x < 0){
            return false
        }
        let num = x
        let ans: number = 0

        while(num !== 0){
            let rem = num%10
            ans = ans*10 + rem
            num = Math.floor(num/10)
        }

        return ans === x
    };
    
    console.log(isPalindrome(121))
}
