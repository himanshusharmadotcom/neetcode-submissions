class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

    let charMap = new Map();

    // Store the frequency of each character in t
    for (let char of t) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    let left = 0;
    let minLength = Infinity;
    let startIndex = 0;

    let required = charMap.size;
    let formed = 0;

    let windowMap = new Map();

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        windowMap.set(char, (windowMap.get(char) || 0) + 1);

        // Check whether the current character satisfies its required frequency
        if (
            charMap.has(char) &&
            windowMap.get(char) === charMap.get(char)
        ) {
            formed++;
        }

        // When all required characters are present
        while (formed === required) {

            // Update minimum window
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                startIndex = left;
            }

            let leftChar = s[left];

            windowMap.set(leftChar, windowMap.get(leftChar) - 1);

            // Check whether removing this character breaks the requirement
            if (
                charMap.has(leftChar) &&
                windowMap.get(leftChar) < charMap.get(leftChar)
            ) {
                formed--;
            }

            left++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.substring(startIndex, startIndex + minLength);
    }
}
