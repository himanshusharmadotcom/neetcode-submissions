class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};

        for(let key = 0; key < strs.length; key++){
            let sortedValue = strs[key].split('').sort().join('');

            if(hashMap[sortedValue]){
            hashMap[sortedValue].push(strs[key]);
            }else{
            hashMap[sortedValue] = [strs[key]];
            }
        }

        return Object.values(hashMap);
    }
}
