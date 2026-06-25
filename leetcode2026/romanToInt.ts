function romanToInt(s: string): number {
    const n = s.length
    const rMap: Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let res = 0

    for (let i = 0; i < n; i++) {
        const ch = s[i]

        if (i + 1 < n && rMap[ch] < rMap[s[i + 1]]) {
            res -= rMap[ch]
        } else {
            res += rMap[ch]
        }


    }

    return res
};