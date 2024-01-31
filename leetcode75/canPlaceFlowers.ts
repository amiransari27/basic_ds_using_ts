function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    
    let idx: number = 0

    while (n > 0 && idx < flowerbed.length){

        let left: number = idx ===0 ? 0 :flowerbed[idx-1]
        let right : number = idx === flowerbed.length - 1 ? 0 : flowerbed[idx+1]
        if ( flowerbed[idx] ===0 && left === 0 && right === 0 ){
            flowerbed[idx] = 1
            n--
        }
        idx++
    } 
    
    return n === 0
};

