function mergeAlternately(word1: string, word2: string): string {

    let p1: number = 0
    let p2: number = 0
    let turn: boolean = true
    let res: string = ""
    while(p1 < word1.length && p2 < word2.length ){
        if (turn){
            res += word1[p1]
            p1++
        }else{
            res += word2[p2]
            p2++
        }
        turn = !turn
    }

    console.log(p1, p2)
    if (p1 <= word1.length - 1){
        res += word1.slice(p1)
    }
    if (p2 <= word2.length -1 ){
        res += word2.slice(p2)
    }

    return res
};

console.log(mergeAlternately("abc","pqrs"))
