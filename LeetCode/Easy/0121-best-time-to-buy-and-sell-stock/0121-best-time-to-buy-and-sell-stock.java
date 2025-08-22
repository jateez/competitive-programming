class Solution {
    public int maxProfit(int[] prices) {
        int currMaxProfit = 0;
        int lowestPrice = prices[0];
        int right = 1;
        while (right < prices.length) {
            currMaxProfit = Math.max(currMaxProfit, (prices[right] - lowestPrice));
            if (lowestPrice > prices[right]) {
                lowestPrice = prices[right];
            }
            right++;
        }
        return currMaxProfit;
    }
}