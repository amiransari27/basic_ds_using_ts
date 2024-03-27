function minDistance(word1: string, word2: string): number {
    let dp = new Array(word1.length + 1).fill(new Array(word2.length + 1).fill(0))

    dp = JSON.parse(JSON.stringify(dp));
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 0
            } else if (i === 0) {
                dp[i][j] = j

            } else if (j === 0) {
                dp[i][j] = i

            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]
                } else {
                    const insert = dp[i - 1][j]
                    const delet = dp[i][j - 1]
                    const replace = dp[i - 1][j - 1]

                    dp[i][j] = 1 + Math.min(insert, delet, replace)
                }
            }
        }
    }
    return dp[word1.length][word2.length]
};
