function rob(nums: number[]): number {

    const stealMoney = new Array(nums.length + 1)

    // [1,2,3,1]
    stealMoney[0] = 0
    stealMoney[1] = nums[0]

    for (let i = 2; i < stealMoney.length; i++) {
        stealMoney[i] = Math.max(
            (nums[i - 1] + stealMoney[i - 2]),
            stealMoney[i - 1]
        )
    }
    return stealMoney[stealMoney.length - 1]
};
