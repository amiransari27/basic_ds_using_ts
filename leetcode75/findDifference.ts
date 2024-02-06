function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set<number>(nums1)
    const set2 = new Set<number>(nums2)

    const list1: number[] = []
    set1.forEach((val) => {
        if (!set2.has(val)){
            list1.push(val)
        }
    })

    const list2: number[] = []
    set2.forEach((val) => {
        if (!set1.has(val)){
            list2.push(val)
        }
    })
    
    return [list1, list2]

};
