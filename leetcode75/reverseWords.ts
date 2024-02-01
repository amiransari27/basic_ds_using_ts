function reverseWords(s: string): string {
    const sArr: string[] = s.trim().split(" ")
    let res : string = ""
    for (let i = sArr.length - 1 ; i>=0; i--){
        if (sArr[i]){
            res += sArr[i].trim() + " "
        }
        
    }
    return res.trim()
};

console.log(
    reverseWords("a good   example")
)
