function factorial(n: number): number{
    let fact = 1
    while(n >= 1){
        fact = fact*n
        n--
    }
    return fact
}


function factorialRec(n: number): number{
    
    if (n <=1 ){
        return 1
    }
    return n*factorialRec(n-1)
}



console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

console.log("-----")

console.log(factorialRec(3))
console.log(factorialRec(4))
console.log(factorialRec(5))
