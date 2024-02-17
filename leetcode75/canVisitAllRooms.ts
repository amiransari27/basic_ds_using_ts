function canVisitAllRooms(rooms: number[][]): boolean {

    const visited: Set<number> = new Set()

    function dfs(source: number){
        visited.add(source)
        for (const node of rooms[source]){
            if (!visited.has(node)){
                dfs(node)
            }
        }
    }
    dfs(0)

    return visited.size === rooms.length
};
