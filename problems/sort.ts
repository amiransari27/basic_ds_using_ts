{
    function bubbleSort(arr: number[]): number[]{

        for (let i = 0; i < arr.length; i++){
            let right = arr.length - 1
            let left = right - 1

            
            // while(left > -1) {
            while((left-i) > -1) { 
                if (arr[left] > arr[right]){
                    let leftTmp = arr[left]
                    arr[left] = arr[right]
                    arr[right] = leftTmp
                }
                right--
                left--
            }
        }
        
        return arr

    }

    function bubbleSort2(arr: number[]): number[]{

        let swapped: boolean
        do {
            swapped = false
            for (let i=0; i<arr.length -1 ; i++){
                if (arr[i] > arr[i+1]){
                    const tmp = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = tmp 
                    swapped = true
                } 
            }
        } while(swapped)
        
        return arr
    }
    

    function selectionSort(arr: number[]): number[]{

        for (let j=0; j<arr.length; j++){
            let small = j
            for (let i=j; i< arr.length; i++){
                
                if (arr[small] > arr[i]){
                    small = i
                }
            }
            let temp = arr[j]
            arr[j] = arr[small]
            arr[small] = temp
        }
        
        return arr
    }

    function insertionSort(arr: number[]): number[]{

        for (let i=1; i<arr.length; i++){
            let j = i
            while(j > 0) {
                if (arr[j] < arr[j-1]){
                    let tmp = arr[j-1]
                    arr[j-1] = arr[j]
                    arr[j] = tmp
                    j--
                }else{
                    break
                }   
            }
        }
        return arr
    }

console.log(bubbleSort([1,-6, 20, 12, 102, 8, -2, 4]))
console.log("-------")
console.log(bubbleSort2([1,-6, 20, 12, 102, 8, -2, 4]))
console.log("-------")
console.log(selectionSort([1,-6, 20, 8, -2, 4]))
console.log("-------")
console.log(insertionSort([1,-6, 20, 8, -2, 4]))

}
