class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int currAmount = 0;
        while (left < right) {
            currAmount = Math.max(currAmount, ((right - left) * (Math.min(height[left], height[right]))));
            if (height[left] > height[right]) {
                right--;
            } else {
                left++;
            }
        }
        return currAmount;
    }
}