function findCircleNum(isConnected: number[][]): number {
    let province = 0
    const visited: Set<number> = new Set()

    const dfs = (node: number) => {
        visited.add(node)
        for (let j=0; j< isConnected[node].length ; j++){
            if (isConnected[node][j] === 1 && !visited.has(j)){
                dfs(j)
            }
        } 
    }

    for (let i =0; i< isConnected.length; i++){
        if (!visited.has(i)){
            dfs(i)
            province++
        }
    }

    return province
};
