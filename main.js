function find_pairs(nums1, nums2, k) {
    let index1 = 0;
    let index2 = nums2.length - 1;
    let result = [];
    let a, b;
    while(true) {
        if (index1 >= nums1.length || index2 < 0) {
            break;
        }
        a = nums1[index1]
        b = nums2[index2]
        if (a + b > k) {
            index2--;
            continue;
        }
        if (a + b < k) {
            index1++;
            continue;
        }
        result.push([a,b]);
        index1++;
        index2--;
    }
    return result;
}

let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 16;

console.log(find_pairs(nums1, nums2, k))


function decrypt(originalText, knownWord) {
    const words = originalText.split(" ");
    let word, j;
    let knownLower  = knownWord.toLowerCase();
    let shiftAt0, shift;
    let result;
    let c, cNumber;
    
    for (var i =0; i < words.length; i++) {
        j = words[i].length - 1;
        while(j >= 0) {
            c = words[i][j]
            if (c.toLowerCase() != c.toUpperCase())  break;
            j--;
        }
        word = words[i].slice(0, j + 1).toLowerCase();
        console.log(word);
        if (word.length != knownLower.length) continue;
        shiftAt0 = (word.charCodeAt(0) - knownLower.charCodeAt(0) + 26) % 26;
        j = 1;
        while (j < word.length) {
            shift = (word.charCodeAt(j) - knownLower.charCodeAt(j) + 26) % 26;
            if (shift != shiftAt0) break;
            j++;
        }
        if (j === word.length) break;
    }
    result = ""
    for(var i =0; i < originalText.length; i++) {
        c = originalText[i];
        cNumber = originalText.charCodeAt(i);
        if (c.toLowerCase() === c.toUpperCase()) {
            result += c;
            continue;
        }
        if (c === c.toLowerCase()) {
            cNumber = "a".charCodeAt(0) + ((cNumber - "a".charCodeAt(0) - shiftAt0 + 26) % 26);
            c = String.fromCharCode(cNumber);
            result += c;
            continue;
        }
        cNumber = "A".charCodeAt(0) + ((cNumber - "A".charCodeAt(0) - shiftAt0 + 26) % 26);
        c = String.fromCharCode(cNumber);
        result += c;
        continue;
    }
    return result;

}

console.log(decrypt("aAa| cDefGh", "bbb"))