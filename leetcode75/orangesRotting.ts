function orangesRotting(grid: number[][]): number {
    const direction = [
        [0, -1], [-1, 0], [0, 1], [1, 0]
    ]
    let total = 0
    let rotten = 0
    let step = 0

    const queue: number[][] = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2 || grid[i][j] === 1) total++
            if (grid[i][j] == 2) {
                queue.push([i, j])
            }
        }
    }

    if (total === 0) return 0

    while (queue.length > 0) {
        let n = queue.length
        rotten += n
        if (total === rotten) {
            return step
        }
        while (n > 0) {
            const [i, j] = queue.shift()
            for (const [r, c] of direction) {
                let new_i = i + r
                let new_j = j + c

                if (new_i >= 0 && new_i < grid.length && new_j >= 0 && new_j < grid[0].length && grid[new_i][new_j] === 1) {
                    queue.push([new_i, new_j])
                    grid[new_i][new_j] = 2
                }
            }
            n--
        }
        step++
    }

    return -1
};
