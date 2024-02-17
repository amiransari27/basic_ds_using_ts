/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

 function guess(num: number): number { return 0 }

 function guessNumber(n: number): number {
    let low = 1
    let high = n
 
     function sol(low, high) {
         if (low > high){
             return -1
         }
         let mid = Math.floor((low + high)/2)
         const res = guess(mid)
         if (res === 0) {
             return mid
         } else if (res < 0) {
             return sol(low, mid-1)
         } else {
             
             return sol(mid+1, high)
         }
     }
 
     return sol(low, high)
 };
