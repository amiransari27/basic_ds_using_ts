function threeSumClosest(nums: number[], target: number): number {
    nums = quickSort_threeSumClosest(nums)
    let ans = 0
    let gap = Number.MAX_VALUE

    for (let i= 0; i < nums.length - 2; i++){
        let low = i+1
        let high = nums.length - 1

        while (low < high){
            let sum = nums[i] + nums[low] + nums[high]
            if (sum < target){
                let tmpGap = target - sum
                if (tmpGap < gap){
                    gap = tmpGap
                    ans = sum
                }
                low++
            }else if (sum > target){
                let tmpGap = sum - target
                if (tmpGap < gap){
                    gap = tmpGap
                    ans = sum
                }
                high--
            }else{
                return sum
            }
        }
        
    }

    return ans
};


function quickSort_threeSumClosest(nums: number[]): number[]{

    
    function sort(nums:number[], low: number, high: number) {
        if (low < high){
            const pi = partision(nums, low, high)
            sort(nums, low, pi - 1)
            sort(nums, pi+1, high)
        }
    }

    function partision(number:number[], low: number, high: number): number {
        
        let pivot = number[high]
        let position = low - 1

        for (let i = low; i< high;i++){
            if (nums[i] < pivot){
                position++
                let tmp = nums[position]
                nums[position] = nums[i]
                nums[i] = tmp
            }
        }

        position++
        let tmp = nums[position]
        nums[position] = nums[high]
        nums[high] = tmp

        return position
    }

    sort(nums, 0, nums.length - 1)

    return nums
}

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))
