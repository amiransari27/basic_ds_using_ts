/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    
    let i :number = 0, j: number = 0

    while(j< nums.length){
        if (nums[i] !== 0){
            i++
            j++
            continue
        }
        if (nums[j] === 0){
            j++
            continue
        }
        let tmp = nums[j]
        nums[j] = nums[i]
        nums[i] = tmp
        i++
        j++
    }
    
 };
