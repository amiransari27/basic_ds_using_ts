function nearestExit(maze: string[][], entrance: number[]): number {
    let row = maze.length
    let col = maze[0].length
    const directions: number[][] = [
        [0, -1], [-1, 0], [0, 1], [1, 0]
    ]

    const queue: number[][] = []
    queue.push([entrance[0], entrance[1]])
    maze[entrance[0]][entrance[1]] = "+"
    let step = 0

    while (queue.length > 0) {
        let n = queue.length
        while (n > 0) {
            const pair = queue.shift()
            let i = pair[0]
            let j = pair[1]

            if (
                (i != entrance[0] || j != entrance[1]) &&
                (i === 0 || i === row - 1 || j === 0 || j === col - 1)
            ) {
                return step
            }

            // explore all neighbours
            directions.forEach((dir) => {
                let new_i = i + dir[0]
                let new_j = j + dir[1]

                if (new_i >= 0 && new_i < row && new_j >= 0 && new_j < col && maze[new_i][new_j] === ".") {
                    queue.push([new_i, new_j])
                    maze[new_i][new_j] = "+"
                }

            })
            n--
        }
        step++
    }

    return -1
};
