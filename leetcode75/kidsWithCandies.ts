function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    
    let maxCandies: number = 0
    const res: boolean[] = []
    for (let i=0; i<candies.length; i++){
        maxCandies = Math.max(maxCandies, candies[i])
    }

    for (let i=0; i<candies.length; i++){
        if (candies[i]+ extraCandies >= maxCandies){
            res.push(true)
        }else{
            res.push(false)
        }
    }

    return res
};
