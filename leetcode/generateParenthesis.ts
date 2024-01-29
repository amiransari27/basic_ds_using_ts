function generateParenthesis(n: number): string[] {
    const list: string[][] = [[""], ["()"]] // ["(())", "()()"]
    
    for (let i = 2; i<= n; i++){
        let left = 0
        let right = i - 1
        list[i] = []
        while(right >=0 && left <i){
            for(let j=0; j<list[left].length; j++){
                for(let k=0; k<list[right].length; k++){
                    let str: string = `(${list[left][j]})${list[right][k]}` 
                    list[i].push(str)
                }
            }
            left++
            right--
        }

    }

    return list[n]
};

function generateParenthesisRec(n: number): string[] {

    const res: string[] = []

    function dfs(open, close, str){

        if (open !== n){
            dfs(open+1, close, str + "(")
        }

        if (close != n && close<open){
            dfs(open, close+1, str + ")")
        }

        if (open === n && close === n){
            res.push(str)
        }

        
    }

    dfs(0,0, "")

    return res
}
