const a = [
    {
        c: [
            {
                d: 5
            }
        ]
    },
    '5',
    {
        f: 7
    },
    {
        e: {
            c: [9, { d: 9 }]
        }
    }
 ];
 

 const uniqueKeys: any[] = []

 function dfs(obj: any) {

    if (Array.isArray(obj)){
        for (let ele of obj){
            dfs(ele)
        }
    }else if (typeof obj === "object"){
        for (let ele in obj){
            uniqueKeys.push(ele)
            dfs(obj[ele])
        }
    }else{
        return
    }

 }

dfs(a)

console.log(uniqueKeys)
