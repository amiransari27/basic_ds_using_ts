function equalPairs(grid: number[][]): number {
    const l = grid.length
    let count = 0

    const rmap:{[key: string]: number} = {} 
    for (let r=0; r<l; r++){
        let key: string = ""
        for (let c=0; c<l; c++){
            key += `${grid[r][c]}-`
        }   
        if (rmap[key]){
            rmap[key] += 1
        }else{
            rmap[key] = 1
        }
    }
    
    for (let c=0; c<l; c++){
        let key: string = ""
        for (let r=0; r<l; r++){
            key += `${grid[r][c]}-`
        }
        if (rmap[key]){
            count += rmap[key]
        }
    }
    return count
};
