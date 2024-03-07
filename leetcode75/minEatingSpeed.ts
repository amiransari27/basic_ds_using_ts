function minEatingSpeed(piles: number[], h: number): number {
    let low = 1
    let high = Math.max(...piles)

    while (low < high) {
        let mid = Math.floor((low + high) / 2)

        if (canEatAll(piles, mid, h)) {
            high = mid
        } else {
            low = mid + 1
        }

        console.log(low, high)

    }
    return low
};

function canEatAll(piles: number[], mid: number, h: number): boolean {
    let th = 0
    

    piles.forEach((b) => {
        th += Math.floor(b / mid)
        if (b % mid > 0) {
            th++
        }
    })

    
    return th <= h
}
