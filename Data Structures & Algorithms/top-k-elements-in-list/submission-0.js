class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};

        for (let key of nums) {
            count[key] = (count[key] || 0) + 1;
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (let [val, freq] of Object.entries(count)) {
            bucket[freq].push(val);
        }

        const result = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i].length > 0) {
                for (let num of bucket[i]) {
                    result.push(num);
                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }
    }
}
