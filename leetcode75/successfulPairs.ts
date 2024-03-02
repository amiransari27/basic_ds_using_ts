function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const n = potions.length
    potions.sort((a, b) => a - b)
    const res: number[] = []
    const maxPot = potions[potions.length - 1]
    for (const v of spells) {
        // spell * min >= success
        // min >= success/spell
        const minPot = Math.ceil(success/ v)
        if (minPot > maxPot){
            res.push(0)
            continue
        }
        const pos = binaySearch(potions, minPot)
        console.log(n, minPot, pos)
        res.push(n-pos)
    }

    return res
};

function binaySearch(nums: number[], val: number): number {
 
    function solution(low, high) {
        if (high < 0){
            return 0
        }
       
        if (low > high) {
            if (val > nums[high]){
                return low
            }else{
                return high
            }
        }


        let mid = Math.ceil((low + high) / 2)

        if (nums[mid] === val) {
            if (nums[mid - 1] === val){
                return solution(low, mid - 1)
            }
            return mid
        } else if (nums[mid] < val) {
            return solution(mid + 1, high)
        } else {
            return solution(low, mid - 1)
        }

    }

    return solution(0, nums.length - 1)

}
