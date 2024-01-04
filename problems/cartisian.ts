{
    function cartisian(set1: number[], set2: number[]): number[][] {
        const product: number[][] = []

        for (let i=0; i <set1.length; i++) {
            for (let j=0; j <set2.length; j++){
                product.push([set1[i], set2[j]])
            }
        }

        return product
    }

    console.log(cartisian([1,2], [3,4,5]))
}
