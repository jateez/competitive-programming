class Solution {
    public int[] twoSum(int[] nums, int target) {
        if (nums.length == 2) {
            return new int[] { 0, 1 };
        }

        Map<Integer, Integer> diffs = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (diffs.containsKey(target - nums[i])) {
                return new int[] { diffs.get((target - nums[i])), i };
            }
            diffs.put(nums[i], i);
        }
        System.out.println(diffs);
        return new int[] { 0, 1 };
    }
}