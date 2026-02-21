/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let currMaxProfit = 0; currLowestPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > currLowestPrice) {
            currMaxProfit = Math.max(currMaxProfit, prices[i] - currLowestPrice)
        } else if (prices[i] < currLowestPrice) {
            currLowestPrice = prices[i]
        }
    }
    return currMaxProfit
};