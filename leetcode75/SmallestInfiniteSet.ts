class SmallestInfiniteSet {
    numSet: boolean[]
    curIndex: number
    constructor() {
       this.numSet = new Array(1001).fill(true) 
       this.curIndex = 1
    }

    popSmallest(): number {
        const res = this.curIndex
        this.numSet[this.curIndex] = false
        while (!this.numSet[this.curIndex]){
            this.curIndex++
        }
        return res
    }

    addBack(num: number): void {
        this.numSet[num] = true
        if (num < this.curIndex){
            this.curIndex = num
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
