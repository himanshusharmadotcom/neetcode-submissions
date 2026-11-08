class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for(let i = 0;  i < prices.length; i++){
            minPrice = Math.min(prices[i], minPrice);

            let profit = prices[i] - minPrice;

            maxProfit = Math.max(profit, maxProfit);
        }

        return maxProfit;
    }
}
