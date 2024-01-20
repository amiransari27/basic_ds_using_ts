function threeSum(nums: number[]): number[][] {
    const arr: number[][] = []
    const memo: {[key: string]: boolean} = {}

    for (let i = 0; i< nums.length -2 ; i++){
        for (let j = i+1; j< nums.length -1; j++){
            for (let k = j+1; k< nums.length; k++){
                const tmp = [nums[i], nums[j], nums[5]]
                tmp.sort((a,b)=>a-b)

                const key = tmp.join("")
                if (!memo[key]){
                    if (nums[i] + nums[j] + nums[k] === 0){
                        memo[key] = true
                        arr.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
            
        }
    }

    return arr
};


// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([0,1,1]))
console.log(threeSum([-2,0,1,1,2]))
