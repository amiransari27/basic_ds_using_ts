// time complexity O(n)
function fibonacci(n: number): number[] {
    const fib = [0,1]

    for(let i=2; i< n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

// time complexity - O(n)
// because at each level we are calling the function once
function fibonacciRec (n: number): number[]{
    if (n == 1){
        return [0]
    }
    if (n == 2){
        return [0,1]
    }
    const arr = fibonacciRec(n-1)
    arr.push(arr[n-2] + arr[n-3])

    return arr
}

// return nth element of fibonacci series
// time complexity - O(2^n)
// because at each level we are calling the function twice
function fibonacciNthNumRec(n: number): number{

    if (n === 0){
        return 0
    }else if (n === 1){
        return 1
    }

    const num = fibonacciNthNumRec(n-1) + fibonacciNthNumRec(n-2)

    return num
}


console.log(fibonacci(2))
console.log(fibonacci(4))
console.log(fibonacci(7))
console.log("------")
console.log(fibonacciRec(2))
console.log(fibonacciRec(4))
console.log(fibonacciRec(7))
console.log("-----")
console.log(fibonacciNthNumRec(2))
console.log(fibonacciNthNumRec(4))
console.log(fibonacciNthNumRec(7))

