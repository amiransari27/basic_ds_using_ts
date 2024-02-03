function maxArea(height: number[]): number {
    
    let left = 0
    let right = height.length - 1
    let cap = 0

    while(left < right){

        if (height[left] < height[right]){
            cap = Math.max(cap, height[left] * (right-left))
            left++
        }else{
            cap = Math.max(cap, height[right] * (right-left))
            right--
        }
    }

    return cap
};
