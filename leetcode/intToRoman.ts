{

    function intToRoman(num: number): string {
        
        let str = ""
        str = processStr(str, "", "M", "", Math.floor(num/1000))
        num %= 1000
        
        str = processStr(str, "M", "C", "D", Math.floor(num/100))
        num %= 100

        str = processStr(str, "C", "X", "L", Math.floor(num/10))
        num %= 10

        str = processStr(str, "X", "I", "V", Math.floor(num))


        return str

    };

    function processStr(str: string, major: string, minor: string, middle: string, num: number): string{
        if (num <= 3){
            for (let i= 1; i<=num; i++){
                str += minor
            }
        }else if (num == 4){
            str += `${minor}${middle}`
        }else if (num == 5){
            str += middle
        }else if (num <= 8){
            str += middle
            for (let i= 6; i<=num; i++){
                str += minor
            }
        }else if (num == 9){
            str += `${minor}${major}`
        }

        return str
    }

    console.log(intToRoman(3449))
}
