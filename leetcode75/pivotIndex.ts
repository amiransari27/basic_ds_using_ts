function pivotIndex(nums: number[]): number {
    const sumArr: number[] = new Array(nums.length)
    sumArr[0] = 0
    let sum : number = nums[0]
    for (let i=1; i< nums.length; i++){
        sum += nums[i]
        sumArr[i] = sumArr[i-1] + nums[i-1]
    } 

    for (let i=0; i< nums.length; i++){
        if (sumArr[i] === sum - sumArr[i] - nums[i]) {
            return i
        }
    }

    return -1
};
