class Solution {
    public int trap(int[] height) {
        /*
        * The Logic
        * Use two pointer
        * Define the shorter wall from left and right 
          (Cause water can be held only as high as the shorter elevation block height)
        * Pick the taller block from current wall block and the next pointer's block
          (to get as high elevation as possible)
        * then add it to the current sum subtracted by the current pointer's block
        * ???
        * Voila
        */
        int currSum = 0;
        int left = 0, right = height.length - 1;
        int leftWall = height[0], rightWall = height[height.length - 1];
        while (left < right) {
            if (height[right] > height[left]) {
                leftWall = Math.max(leftWall, height[left]);
                currSum += leftWall - height[left];
                left++;
            } else {
                rightWall = Math.max(rightWall, height[right]);
                currSum += rightWall - height[right];
                right--;
            }
        }
        return currSum;
    }
}