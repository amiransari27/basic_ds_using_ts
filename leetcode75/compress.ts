function compress(chars: string[]): number {
    
    let ca: string = ""
    let cc: number = 0
    let str: string = ""
    for (let i=0; i<chars.length; i++){
        if(ca === chars[i]){
            cc++
        }else{
            ca = chars[i]
            if (cc > 1){
                str += cc
            }
            str += chars[i]
            cc = 1
        }
    }
    if (cc > 1){
        str += cc
    }
    for (let i=0; i< str.length;i++){
        chars[i] = str[i]
    }
    

    return str.length
};

console.log(
    compress(["a","a","b","b","c","c","c"])
)
