class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();

        for (let key of nums){
            if(seen.has(key)){
                return true;
            }

            seen.add(key)
        }

        return false
    }
}
