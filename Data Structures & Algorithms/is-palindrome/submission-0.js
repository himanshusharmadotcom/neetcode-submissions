class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sanitizeStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let left = 0;
        let right = sanitizeStr.length - 1;

        while(left < right){
            if(sanitizeStr[left] !== sanitizeStr[right]){
                return false
            }
            left++;
            right--;
        }

        return true;
    }
}
