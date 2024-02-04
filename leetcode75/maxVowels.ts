function maxVowels(s: string, k: number): number {
    const vowels: { [key: string]: boolean } = {
        "a": true,
        "e": true,
        "i": true,
        "o": true,
        "u": true
    }
    let ans: number = 0
    let vCount: number = 0
    for (let i = 0; i < k; i++) {
        if (vowels[s[i]]) {
            vCount++
        }
    }
    ans = vCount

    for (let i = k; i < s.length; i++) {
        if (vowels[s[i]]) {
            vCount++
        }
        if (vowels[s[i - k]]) {
            vCount--
        }

        ans = Math.max(ans, vCount)
    }

    return ans
};
