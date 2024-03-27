function singleNumber(nums: number[]): number {
    
    let xor = 0

    for (let v of nums){
        xor = xor ^ v
    }
    return xor
};
