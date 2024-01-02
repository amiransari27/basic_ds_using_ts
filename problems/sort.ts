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

    function quickSort(arr: number[]): number[]{
        if (arr.length < 2){
            return arr
        }
        let pivot = arr[arr.length -1]
        let left: number[] = []
        let right: number[]= []
        for (let i =0; i<arr.length -1  ; i++){
            if (arr[i] > pivot){
                right.push(arr[i])
            }else{
                left.push(arr[i])
            }
        }

        return[...quickSort(left),pivot, ...quickSort(right)]
        
    }

    // without extra space
    function quickSort2(arr: number[]): number[]{

        function sort(arr: number[], low: number, high: number){
            if (low < high){
                let pi = partision(arr, low, high)                
                sort(arr, low, pi - 1)
                sort(arr, pi + 1, high)
            }
        }

        function partision(arr: number[], low: number, high: number): number{
            let pivot = arr[high]
            let position = low - 1
            for (let i= low; i<high; i++){
                if (arr[i] < pivot){
                    //swap
                    position++
                    let tmp = arr[position]
                    arr[position] = arr[i]
                    arr[i] = tmp
                }
            }
            position++
            let tmp = arr[position]
            arr[position] = pivot
            arr[high] = tmp
            return position
        }

        sort(arr,0, arr.length -1)

        return arr
    }

    function mergeSort(arr: number[]): number[]{
        if (arr.length < 2){
            return arr
        }
        let mid = Math.floor(arr.length/2)
        let left: number[] = arr.slice(0,mid)
        let right: number[]= arr.slice(mid)
        

        const leftArr = mergeSort(left)
        const rightArr = mergeSort(right)
        const tmpArr: number[] = []
        
        while(leftArr.length && rightArr.length){
            let element
            if(leftArr[0] <= rightArr[0]){
                element = leftArr.shift()
            }else{
                element = rightArr.shift()
            }   
            element && tmpArr.push(element)         
        }

        return [...tmpArr, ...leftArr, ...rightArr]

    }


// console.log(bubbleSort([1,-6, 20, 12, 102, 8, -2, 4]))
// console.log("-------")
// console.log(bubbleSort2([1,-6, 20, 12, 102, 8, -2, 4]))
// console.log("-------")
// console.log(selectionSort([1,-6, 20, 8, -2, 4]))
// console.log("-------")
// console.log(insertionSort([1,-6, 20, 8, -2, 4]))
// console.log("-------")
// console.log(quickSort([1,-6, 20, 8, -2, 4]))
// console.log("-------")
// console.log(mergeSort([1,-6, 20, 8, -2, 4]))
console.log("-------")
console.log(quickSort2([1,-6, 20, 8, -2, 4]))

}
