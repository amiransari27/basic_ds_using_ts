class RecentCounter {
    queue: number[]
    constructor() {
        this.queue = []
    }

    ping(t: number): number {
        if (this.queue.length == 0) {
            this.queue.push(t)
        }else{
            const margin = t - 3000
            let tillIndex = 0
            for (let i= 0; i< this.queue.length ; i++){
                if (margin > this.queue[i]){
                    tillIndex++
                }else{
                    break
                }
            }

            this.queue.splice(0, tillIndex)
            this.queue.push(t)
        }

        return this.queue.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
