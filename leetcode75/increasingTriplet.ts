function increasingTriplet(nums: number[]): boolean {

    let fs: number = Number.MAX_VALUE
    let ss: number = Number.MAX_VALUE
    
    for (let i= 0; i<nums.length; i++){
        if (nums[i] <= fs){
            fs = nums[i]
        }else if (nums[i] <= ss){
            ss = nums[i]
        }else{
            return true
        }
    }
    return false

};


