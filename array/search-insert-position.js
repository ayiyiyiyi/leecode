/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * 输入: [1,3,5,6], 5 输出: 2
 * 输入： [1,3,5,6], 2 输出: 1
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {

    let i;
    i = nums.findIndex(n => {
        return n >= target;
    });

    return i !== -1 ? i : nums.length;
};

searchInsert([1,3,5,6], 0)

var searchInsertTwo = function(nums, target) {
    const length = nums.length;
    if (nums[length - 1] < target) {
      return length;
    } else if (length === 0) {
      return 0;
    }
    let left = 0;
    right = length - 1;
    while (left < right) {
      let mid = (left + right) >>> 1;
      if (target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return right;
  };
  