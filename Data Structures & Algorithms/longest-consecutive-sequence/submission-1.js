class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            // Check if num is the starting point
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let count = 1;

                // Count consecutive numbers
                while (numSet.has(currentNum + 1)) {
                    currentNum++;
                    count++;
                }

                longest = Math.max(longest, count);
                }
            }

        return longest;
    }
}
