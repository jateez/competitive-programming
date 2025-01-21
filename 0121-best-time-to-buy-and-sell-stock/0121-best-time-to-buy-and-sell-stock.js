/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let currLowestPrice = prices[0];
    let currMaxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - currLowestPrice > currMaxProfit) {
            currMaxProfit = prices[i] - currLowestPrice;
        }
        if (prices[i] < currLowestPrice) {
            currLowestPrice = prices[i];
        }
    }

    return currMaxProfit;
};