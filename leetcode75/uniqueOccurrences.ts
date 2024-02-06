function uniqueOccurrences(arr: number[]): boolean {
    const f = new Map<number, number>()
    arr.forEach((value)=>{
        if (f.has(value)){
            f.set(value, f.get(value) + 1)
        }else{
            f.set(value, 1)
        }
    })
    
    console.log(f)

    const s = new Set<number>()
    for (let [i, val] of f){
        if (s.has(val)){
            return false
        }
        s.add(val)
    }

    return true
};

console.log(
    uniqueOccurrences([1,2,2,1,1,3])
)
