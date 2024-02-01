function productExceptSelf(nums: number[]): number[] {
    
    const pa: number[] = new Array(nums.length)
    pa[0] = 1
    const sa: number[] = new Array(nums.length)
    sa[nums.length-1] = 1

    const res: number[] = new Array(nums.length)

    for (let i = 1; i< nums.length; i++){
        pa[i] = nums[i-1]*pa[i-1]
    }

    for (let i = nums.length - 2; i>= 0; i--){
        sa[i] = nums[i+1]*sa[i+1]
    }

    for (let i = 0; i< nums.length; i++){
        res[i] = pa[i]*sa[i]
    }
    
    return res
    
};
