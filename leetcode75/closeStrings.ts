function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
        return false 
    }
    const vec1 = new Array(26).fill(0)
    const vec2 = new Array(26).fill(0)
    for (let i=0;i< word1.length; i++){
        let idx1 = word1[i].charCodeAt(0) - 'a'.charCodeAt(0)
        vec1[idx1] += 1

        let idx2 = word2[i].charCodeAt(0) - 'a'.charCodeAt(0)
        vec2[idx2] += 1
    }

    for (let i=0; i< 26; i++){
        if (vec1[i] !== 0 && vec2[i] !== 0) continue
        if (vec1[i] === 0 && vec2[i] === 0) continue

        return false
    }
    return vec1.sort().toLocaleString() === vec2.sort().toLocaleString()
    

};

console.log(
    closeStrings("abc","bca")
)
