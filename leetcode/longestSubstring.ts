{
    function lengthOfLongestSubstring(s: string): number {
        
        let maxCount = 0
        for (let i=0; i< s.length; i++){
            const obj = {}
            let tmpCount = 0
            for (let j=i; j< s.length; j++){
                if (!obj[s[j]]){
                    obj[s[j]] = true
                    tmpCount++
                }
            }

            maxCount = tmpCount > maxCount ? tmpCount : maxCount
        }

        return maxCount
    };

    function lengthOfLongestSubstringOptimized(s: string): number {
        
        //"abcdcshldo"
        let maxCount = 0
        let j: number = -1
        const obj: { [s: string ]: boolean } = {}
        for (let i = 0; i< s.length; i++){
            let tmp: number = 0
            if (!obj[s[i]]){
                obj[s[i]] = true
            }else{
                while(true){
                    j++
                    delete obj[s[j]]
                    if(s[j] === s[i]){
                        i--
                        break
                    }
                }
                
            }
            tmp = i - j
            maxCount = Math.max(maxCount, tmp)

        }
        
        return maxCount
        
    };



    console.log(lengthOfLongestSubstringOptimized("abcdcshldo"))
}
