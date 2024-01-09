{
    //O(n^3)
    function longestPalindrome(s: string): string {
        
        let maxCount = 0
        let maxStr = ""
        for (let i=0; i<s.length; i++){
            let tmpCount = 0
            for (let j=i; j<=s.length; j++){
                tmpCount++
                let str = s.slice(i,j)
                if (isPalindrome(str)){
                    if (maxCount < tmpCount){
                        maxCount = tmpCount
                        maxStr = str
                    }
                }
            }
        }   
        return maxStr
    };

    // O(n^2)
    function longestPalindromeOptimized(s: string): string {

        let result = ""

        // for odd orbit
        for (let ax=0; ax<s.length; ax++){
            let orbit = 1
            let l = 1
            while((ax -orbit)>=0 && (ax +orbit)< s.length ){
                if (s[ax-orbit] === s[ax+orbit]){
                    orbit++
                    l += 2
                }else{
                    break
                }
            }

            if (l > result.length){
                let low = ax - Math.floor(l/2)
                let high = ax + Math.floor(l/2) + 1 // since end index is not included in slice function
                console.log(low, high, s.slice(low, high))
                result=s.slice(low, high)
            }
        }

        // for even orbit
        for (let ax=0; ax<s.length -1; ax++){
            let orbit = 1
            let l = 0
            while((ax -orbit +1)>=0 && (ax +orbit)< s.length ){
                if (s[ax-orbit+1] === s[ax+orbit]){
                    orbit++
                    l += 2
                }else{
                    break
                }
            }

            if (l > result.length){
                let low = ax - Math.floor(l/2) +1
                let high = ax + Math.floor(l/2) + 1 // since end index is not included in slice function
                result=s.slice(low, high)
            }
        }

        
        return result
    }

    function isPalindrome(s: string): boolean{
        let low = 0
        let high = s.length - 1

        while(low < high){
            if (s[low] !== s[high]){
                return false
            }
            low++
            high--
        }
        return true
    }


    console.log(longestPalindromeOptimized("babad"))
}
