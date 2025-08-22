class Solution {
    public int maxProfit(int[] prices) {
        int currMaxProfit = 0;
        int left = 0;
        int lowestPrice = prices[0];
        int right = 1;
        while (right < prices.length) {
            if (currMaxProfit < (prices[right] - lowestPrice)) {
                currMaxProfit = (prices[right] - lowestPrice);
            } else if (lowestPrice > prices[right]) {
                lowestPrice = prices[right];
                left = right;
            }
            right++;
        }
        return currMaxProfit;
    }
}