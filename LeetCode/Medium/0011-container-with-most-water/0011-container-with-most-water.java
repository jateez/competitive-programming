class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int currAmount = 0;
        while (left < right) {
            int w = right - left;
            int h = Math.min(height[right], height[left]);
            if (height[left] > height[right]) {
                right--;
            } else {
                left++;
            }
            currAmount = Math.max(currAmount, (h * w));
        }
        return currAmount;
    }
}