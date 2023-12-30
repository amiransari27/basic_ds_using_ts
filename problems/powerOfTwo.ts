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


function isPowerOfTwoBitwise(n: number): boolean {
    if (n < 1){
        return false
    }
    
    return (n& (n-1)) === 0
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(12))
console.log(isPowerOfTwo(7))
console.log("---------")
console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(5))
