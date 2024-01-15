{
    function maxArea(height: number[]): number {
        
        let low = 0
        let high = height.length - 1

        let capacity = 0
        while(low < high){
            const lh = height[low]
            const rh = height[high]
            
            if (lh < rh){
                capacity = Math.max(capacity, lh * (high - low))
                low++
            }else{
                capacity = Math.max(capacity, rh * (high - low))
                high--
            } 

        }

        return capacity
    };



    console.log(maxArea([1,8,6,2,5,4,8,3,7]))
}
