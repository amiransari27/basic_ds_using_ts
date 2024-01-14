{
    function isMatch(s: string, p: string): boolean {

    
        const res = match(0,0,s,p)
        return res 
    };

    function match(si: number, pi: number, s: string, p:string): boolean {

        if (p.length === pi){
            return s.length === si
        }

        let fMatch: boolean = si < s.length && (s[si] === p[pi] || p[pi] === "." )
        
        console.log(si, pi, fMatch)
        
        let ans: boolean = false

        if (pi + 1 < p.length && p[pi + 1] === "*"){

            ans = (fMatch && match(si +1, pi, s, p)) || match(si, pi+2, s, p)
           
        }else{
            //aa
            //ab

            ans = fMatch && match(si+1, pi+1, s, p)
        }
    
        return ans
    }

    console.log(isMatch("aaa", "a*a"))
}
