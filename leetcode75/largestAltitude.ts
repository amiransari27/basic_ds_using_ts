function largestAltitude(gain: number[]): number {
  let ans: number = Number.MIN_VALUE
  
  gain.reduce((p: number,c: number)=>{
    let altitude = p + c
    ans = Math.max(ans, altitude)
    return altitude
  },0)

  return ans
};
