class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length){
            return false
        }

        let count = {};

        for(let key of s){
            if(count[key]){
                count[key]++;
            }else{
                count[key] = 1;
            }
        }

        for(let key of t){
            if(count[key]){
                count[key]--;
            }else{
                return false
            }
        }
        
        if(!Object.values(count).every(value => value === 0)){
            return false
        }

        
        return true;

    }
}
