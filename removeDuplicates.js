//给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
//不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j > i; j --) {
            if ( nums[j] == nums[i]) {
                nums.splice(j,1);
            }
        }
    }
    return nums.length;
}
removeDuplicates(nums);
//放置两个指针 i 和 j，其中 i 是慢指针，而 j 是快指针。只要 nums[i] = nums[j]，我们就增加 j 以跳过重复项。
// i代表发现了几次 nums[i] != nums[j]
standardAnswer = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j ++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}