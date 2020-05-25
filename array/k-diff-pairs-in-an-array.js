/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var findPairs = function(nums, k) {
    if (k < 0) return 0;
    let visit = new Set(), leftMap = new Set();
    nums.forEach(val => {
        if (visit[val - k]) {
            leftMap.add(val - k);
        }
        if (visit[val + k]) {
            leftMap.add(val)
        }
    })
    return leftMap.size;
}
findPairs( [3, 1, 4, 1, 5], 2)

// val = 3, 判断 visit 中是否存在 3-1 (为了避免重复,所以只记录 k-diff 对中小一点的值)
