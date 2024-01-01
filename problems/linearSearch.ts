function linearSearch(arr: number[], target: number){

    for (let index in arr){
        if (arr[index] === target){
            return index
        }
    }
    return -1
}

const arr = [-5, 2,10,4,6]
console.log(linearSearch(arr, 2))
console.log(linearSearch(arr, 4))
console.log(linearSearch(arr, 1))
