function longestOnes(nums: number[], k: number): number {
    
    let ans: number = 0

    let j= -1 
    for (let i=0; i<nums.length; i++){
        if (nums[i] === 0){
            k--
        }
        while (k < 0){
            j++
            if (nums[j] == 0){
                k++
            }
        }
        ans = Math.max(ans, i-j)
    }
    return ans
};

console.log(
    longestOnes(
        [1,1,1,0,0,0,1,1,1,1,0],2
    )
)
