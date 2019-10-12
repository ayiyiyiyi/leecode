var numsList = [3, 2, 4], traget = 6;
function twoSum(nums, target) {
    var equal = false;
    var i = 0;
    while (!equal) {
        for (var j = i + 1; j < nums.length; j++) {
            var result = nums[i] + nums[j];
            if (result == target && i != j) {
                equal = true;
                return [i, j];
            }
        }
        i++;
    }
    return [];
}
var twoSumMethodTwo = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i ++) {
      const otherIndex = map.get(target - nums[i])
      if (otherIndex !== undefined) return [otherIndex, i]
      map.set(nums[i], i)
    }
};
// map的底层实现是hash,所有map时间复杂度是O(1), 所以当前算法的复杂度是O(n)
