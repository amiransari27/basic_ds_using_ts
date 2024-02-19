class Pair {
    city: number
    isOrignal: boolean

    constructor(city: number, isOrignal: boolean) {
        this.city = city
        this.isOrignal = isOrignal
    }
}

function minReorder(n: number, connections: number[][]): number {

    const adj: { [c: string]: Pair[] } = {}

    for (const [u, v] of connections) {
        if (!adj[u]) {
            adj[u] = []
        }
        if (!adj[v]) {
            adj[v] = []
        }
        adj[u].push(new Pair(v, true))
        adj[v].push(new Pair(u, false))
    }

    const visited: Set<number> = new Set()
    let ans: number = 0
    const dfs = (city: number) => {
        visited.add(city)

        for (const c of adj[city]){
            if (!visited.has(c.city)){
                if (c.isOrignal){
                    ans++
                }
                dfs(c.city)
            }
        }
    }

    dfs(0)

    return ans
};
