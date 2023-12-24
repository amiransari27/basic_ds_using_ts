function factorial(n: number): number{
    let fact = 1
    while(n >= 1){
        fact = fact*n
        n--
    }
    return fact
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
