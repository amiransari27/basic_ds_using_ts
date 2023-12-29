function isPrime(n: number): boolean {

    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n%i === 0){
            return false
        }
    }
    return true
}


// if the number is not prime you will find a divisor at less than or equal of that number 
function isPrimeOptimize(n: number): boolean {

    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(17))
console.log("-----")
console.log(isPrimeOptimize(1))
console.log(isPrimeOptimize(2))
console.log(isPrimeOptimize(4))
console.log(isPrimeOptimize(5))
console.log(isPrimeOptimize(17))
