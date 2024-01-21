function threeSum(nums: number[]): number[][] {
    const arr: number[][] = []
    const memo: {[key: string]: boolean} = {}

    for (let i = 0; i< nums.length -2 ; i++){
        for (let j = i+1; j< nums.length -1; j++){
            for (let k = j+1; k< nums.length; k++){
                let tmp = [nums[i], nums[j], nums[k]]
                tmp = quickSort_3Sum(tmp)

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

function threeSumOptimized(nums: number[]): number[][] {
    if (nums.length === 0){
        return []
    }
    const arr: number[][] = []
    const memo: {[key: string]: boolean} = {}

    nums = quickSort_3Sum(nums)

    for (let i=0; i< nums.length - 2; i++){

        let low = i+1
        let high = nums.length - 1

        while (low < high){
            if (nums[i] + nums[low] + nums[high] === 0){
                let tmp = [nums[i], nums[low], nums[high]]
                const key = tmp.join("")
                if (!memo[key]){
                    memo[key] = true
                    arr.push([nums[i], nums[low], nums[high]])
                    
                }
                low++
                high--
            }else if (nums[i] + nums[low] + nums[high] < 0){
                low++
            }else {
                high--
            }
        }


    }


    return arr
};

function quickSort_3Sum(nums:number[]): number[] {
    
    function sort(nums: number[], low: number, high: number){

        if (low < high){
            const pi = partition(nums, low, high)

            sort(nums, low, pi - 1)
            sort(nums, pi + 1, high)
        }

    }

    function partition(nums: number[], low: number, high: number): number {
        const pivot = nums[high]
        let position = low - 1
        
        for (let i = low; i< high; i++){
            if (nums[i] < pivot){
                position++
                const tmp = nums[position]
                nums[position] = nums[i]
                nums[i] = tmp
            }
        }
        position++
        const tmp = nums[position]
        nums[position] = nums[high]
        nums[high] = tmp
        return position
    }
    
    sort(nums, 0, nums.length - 1)

    return nums
}

console.log(threeSumOptimized([-1,0,1,2,-1,-4]))
// console.log(threeSumOptimized([0,1,1]))
// console.log(threeSumOptimized([0,0,0,]))
// console.log(threeSumOptimized([-2,0,1,1,2]))
