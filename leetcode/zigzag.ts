{
    function convert(s:string, rows: number): string {
        if (rows < 2){
            return s
        }
        
        let result = ""
        for (let i = 0; i<rows; i++) {
            let idx = i
            let driveDown = 2 * (rows - 1 -i)
            let driveUp = 2 * i
            let driveToggle = true
            while(idx < s.length){
                result += s[idx]
                if (i == 0){
                    idx += driveDown
                }else if (i === rows - 1){
                    idx += driveUp
                }else {
                    
                    if (driveToggle){
                        idx += driveDown
                    }else{
                        idx += driveUp
                    }

                    driveToggle = !driveToggle
                }
                
                
            }

        }
        return result
    }

    console.log(convert("PAYPALISHIRING", 3))
}
