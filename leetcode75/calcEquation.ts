class EquatioPair {
    char: string
    val: number

    constructor(char: string, val: number) {
        this.char = char
        this.val = val
    }
}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {

    const adj: { [char: string]: EquatioPair[] } = {}
    let i = 0;
    for (const [u, v] of equations) {
        if (!adj[u]) {
            adj[u] = []
        }
        if (!adj[v]) {
            adj[v] = []
        }
        adj[u].push(
            new EquatioPair(v, values[i])
        )
        adj[v].push(
            new EquatioPair(u, 1 / values[i])
        )
        i++
    }

    const res: number[] = []
    for (const [src, dst] of queries) {


        let ans = {ans : -1.0}
        let product = 1.0
        if (adj[src]) {
            const visited: Set<string> = new Set()
            dfs(src, dst, visited,adj, product, ans )
        }

        res.push(ans.ans)
    }
    
    return res
};

function dfs(src: string, dst: string, visited: Set<string>, adj: { [char: string]: EquatioPair[] }, product, ans) {

    if (visited.has(src)){
        return
    }
    visited.add(src)
    if (src === dst){
        ans.ans = product
        return
    }
    for (const e of adj[src]){
        dfs(e.char,dst, visited,adj, product*e.val, ans)
    }

}
