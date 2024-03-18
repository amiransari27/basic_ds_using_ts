
/*
f(n) = f(n-1) + f(n-2) + 2*f(n-3) + 2*f(n-4) .... + + 2*f(0)
f(n-1) =  f(n-2) + f(n-3) + 2*f(n-4) .... + + 2*f(0)

f(n) - f(n-1) = f(n-1) + f(n-3)
f(n) = 2*f(n-1) + f(n-3)

dp[n] = 2*dp[n-1] + dp[n-3]
*/
function numTilings(n: number): number {

    const M = Math.pow(10, 9) + 7
    const dp = new Array(1001).fill(0)

    function solve_numTilings(n: number): number{

        if (n === 1 || n === 2){
            return n
        }
        if (n === 3){
            return 5
        }

        if (dp[n] !== 0){
            return dp[n]
        }

        dp[n] = (2*solve_numTilings(n-1) + solve_numTilings(n-3)) % M

        return dp[n]
    }
    
    return solve_numTilings(n)
};

