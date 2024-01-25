function fourSum(nums: number[], target: number): number[][] {
    if (nums.length < 4 ){
        return []
    }
    nums.sort((a,b)=>a-b)
    const memo: {[key: string]: boolean} = {}

    const ans: number[][] = []

    for (let i=0; i<nums.length - 3; i++){
        for (let j=i+1; j<nums.length - 2; j++){
            let low = j+1
            let high = nums.length - 1
            while(low < high){
                const sum = nums[i] + nums[j] + nums[low] + nums[high]
                if (sum === target){
                    const key = `${nums[i]}${nums[j]}${nums[low]}${nums[high]}`
                    if (!memo[key]){
                        memo[key] = true
                        ans.push([nums[i], nums[j], nums[low], nums[high]])
                    }
                    low++
                    high--
                }else if (sum < target){
                    low++
                }else{
                    high--
                }
            }

        }   
    }

    return ans
};
