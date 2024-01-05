function twoSum(nums: number[], target: number): number[] {
    
    let res: number[] = []
    for (let i=0; i<nums.length - 1; i++){
        for (let j = 1; j<nums.length; j++){
            if (nums[i] + nums[j] === target){
                res = [i,j]
            }
        }
    }
    return res
};

class Pair{
    constructor(index: number, val: number){
        this.index = index
        this.val = val
    }
    index: number
    val: number
}

function twoSumOptimized(nums: number[], target: number): number[] {

    let pairArr: Pair[] = []

    for (let i=0; i<nums.length; i++){
        pairArr.push(new Pair(i, nums[i]))
    }

    pairArr = mergeSort(pairArr)

    let low = 0
    let high = pairArr.length - 1
    while(low < high){
        if (pairArr[low].val + pairArr[high].val === target){
            return[pairArr[low].index, pairArr[high].index]
        }else if(pairArr[low].val + pairArr[high].val < target){
            low++
        }else{
            high--
        }
    }

    return []

}

function mergeSort(pairArr: Pair[]): Pair[]{
    if (pairArr.length < 2){
        return pairArr
    }
    
    let mid = Math.floor(pairArr.length/2)
    const leftArr = pairArr.slice(0,mid)
    const rightArr = pairArr.slice(mid)

    const left = mergeSort(leftArr)
    const right = mergeSort(rightArr)

    const res : Pair[] = []
    while(left.length && right.length){

        if (left[0].val <= right[0].val){
            let tmp = left.shift()
            tmp && res.push(tmp)
        }else{
            let tmp = right.shift()
            tmp && res.push(tmp)
        }
    }

    res.push(...left, ...right)
    return res

}

console.log(twoSumOptimized([2,7,11,15], 9))
// console.log(twoSumOptimized([3,2,4], 6))
