class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let notebook = {};

        for(let i = 0; i < nums.length; i++){
            let currentNumber = nums[i];
            let complimentary = target - currentNumber;

            if(notebook[complimentary] !== undefined){
                return[notebook[complimentary], i]
            }

            notebook[currentNumber] = i;
        }
    }

}
