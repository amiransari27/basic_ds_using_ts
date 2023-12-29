function isPowerOfTwo(n: number): boolean {
    if (n < 1){
        return false
    }
    
    while( n >1 ){
        if (n%2 !== 0){
            return false
        }
        n = n/2
    }
    return true
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(12))
console.log(isPowerOfTwo(7))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(16.5))
console.log(isPowerOfTwo(-8))
