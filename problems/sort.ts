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
    


const arr = [1,-6, 20, 12, 102, 8, -2, 4]

console.log(bubbleSort(arr))
console.log(bubbleSort([5,4,3,2,1]))
console.log("-------")
console.log(bubbleSort2(arr))

}
