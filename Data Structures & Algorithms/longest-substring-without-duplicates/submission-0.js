class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charMap = new Map();
let left = 0;
let maxLength = 0;

for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];

    if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
        left = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, right);

    maxLength = Math.max(maxLength, right - left + 1);
}

return maxLength;
    }
}
