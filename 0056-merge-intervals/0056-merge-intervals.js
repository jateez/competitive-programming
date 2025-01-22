/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    // edge cases
    if (intervals.length === 0) return []

    const ans = [];

    //sort first based on each interval start 
    intervals.sort((a, b) => a[0] - b[0]);

    let temp = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        // if last end of previous interval is greater or equal 
        // than current interval start
        // then assign temp to the newest greatest value, compare of last end and new end 
        if (intervals[i][0] <= temp[1])
            temp = [temp[0], Math.max(temp[1], intervals[i][1])]
        else {
            // push temporary newly merged interval to answer array then re-initialized it
            ans.push(temp)
            temp = intervals[i]
        }
    }
    // push last temp array after loop
    ans.push(temp)
    return ans;
};