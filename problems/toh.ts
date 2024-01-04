{

    function tower(n: number, rodA: string, rodB: string, rodC: string){

        if (n === 0){
            return         
        }
        
        tower(n-1, rodA, rodC, rodB)
        console.log(`Move disk ${n} form ${rodA} to ${rodB}`)
        tower(n-1, rodC, rodB, rodA)

    }


    tower(3, "A", "B", "C")
}
