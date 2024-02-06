function closeStrings(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    var vec1 = new Array(26).fill(0);
    var vec2 = new Array(26).fill(0);
    for (var i = 0; i < word1.length; i++) {
        var idx1 = word1[i].charCodeAt(0) - 'a'.charCodeAt(0);
        vec1[idx1] += 1;
        var idx2 = word2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        vec2[idx2] += 1;
    }
    console.log(vec1)
    console.log(vec2)
    for (var i = 0; i < 26; i++) {
        if (vec1[i] !== 0 && vec2[i] !== 0)
            continue;
        if (vec1[i] === 0 && vec2[i] === 0)
            continue;
        return false;
    }

    return vec1.sort().toLocaleString() === vec2.sort().toLocaleString();
}
;
console.log(closeStrings("abbzzca", "babzzcz"));
