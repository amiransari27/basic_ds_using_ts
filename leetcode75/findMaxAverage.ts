function findMaxAverage(nums: number[], k: number): number {
    let ans: number = 0
    let sum: number = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    ans = sum / k

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        ans = Math.max(sum / k, ans)
    }

    return ans
};

console.log(
    findMaxAverage([0,4,0,3,2],1)
)
