{
    function binarySearch(arr: number[], target: number): number{
        if (arr.length === 0 ){
            return -1
        }

        let left = 0
        let right = arr.length - 1
        let mid: number

        while(true){
            mid = Math.ceil((right + left)/ 2)
            if (arr[mid] === target){
                return mid
            }

            if(arr[mid]> target){   
                right = mid - 1
            }
            if(arr[mid]< target){
                left = mid + 1
            }

            if (left > right){
                break
            }
        }
        
        return -1

    }

   
    function binarySearchRec(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number{
        if (arr.length === 0 ){
            return -1
        }
        if (left > right){
            return -1
        }
        let mid = Math.floor((left + right)/2)
        if (target === arr[mid]){
            return mid
        } else if (target > arr[mid]) {
            return binarySearchRec(arr, target, mid + 1, right)
        } else {
            return binarySearchRec(arr, target, left, mid - 1)
        }

    }



    const arr = [-5, 2,4,6,10, 12, 25, 36, 100]
    console.log(binarySearch(arr, 2))
    console.log(binarySearch(arr, 6))
    console.log(binarySearch(arr, 1))
    console.log(binarySearch(arr, 100))
    console.log("------------")
    console.log(binarySearchRec(arr, 2))
    console.log(binarySearchRec(arr, 6))
    console.log(binarySearchRec(arr, 1))
    console.log(binarySearchRec(arr, 100))
}
