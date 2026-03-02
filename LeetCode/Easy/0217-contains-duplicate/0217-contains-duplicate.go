func containsDuplicate(nums []int) bool {
     set := make(map[int]bool)

    for i := 0; i < len(nums); i++ {
        if set[nums[i]] {
            return true
        } else {
            set[nums[i]] = true
        }
    }
    return false

}