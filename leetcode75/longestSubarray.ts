function longestSubarray(nums: number[]): number {
    let ans : number = 0
    let j: number = -1
    let k: number = 1
    
    for (let i=0; i< nums.length; i++){
        if (nums[i] === 0){
            k--
        }
        while (k<0){
            j++
            if (nums[j]==0){
                k++
            }
        }
        ans = Math.max(ans, i-j-1)
    }
    return ans
};
