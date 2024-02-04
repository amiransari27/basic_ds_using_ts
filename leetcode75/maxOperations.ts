function maxOperations(nums: number[], k: number): number {
    nums = nums.sort((a,b) => a-b)

    let low = 0
    let high = nums.length- 1
    let count = 0
    while(low< high){
        if (nums[low]+ nums[high] === k){
            count++
            low++
            high--
        }else if (nums[low]+ nums[high]  < k){
            low++
        }else{
            high--
        }
    }

    return count
};

function quick_sort_maxOperations(nums: number[]) {
    sort_maxOperations(nums, 0, nums.length - 1)
}

function sort_maxOperations(nums: number[], l: number, r: number){
    if (l< r){
        const pi = partistion_maxOperations(nums, l, r)
        sort_maxOperations(nums, l, pi-1)
        sort_maxOperations(nums, pi + 1, r)
    }
}


function partistion_maxOperations(nums: number[], l: number, r: number) : number {

    const pivot = nums[r]
    let position = l -  1

    for (let i = l; i< r; i++){
        if (nums[i] < pivot){
            position++
            const tmp = nums[i]
            nums[i] = nums[position]
            nums[position] = tmp
        }
    }

    position++
    const tmp = nums[r]
    nums[r] = nums[position]
    nums[position] = tmp

    return position
}

