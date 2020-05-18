//给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
//不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
//元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。



/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

let nums = [3,2,2,3], val = 3;

//再看自己写出来的方法，仿佛自己是个憨批
let stupidMethod = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            delete nums[i];
        }
    }
    let index = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[index] == undefined) {
            if (nums[i] != undefined) {
                nums[index] = nums[i];
                delete nums[i];
                index++;
            }
        } else {
            index++;
        }
       
    }
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] == undefined) {
            nums.splice(-1,1);
        }
    }
    console.log(nums);
    
    return nums.length;
};
// stupidMethod(nums, val);

// 方法一：双指针,与删除重复元素类似
//时间复杂度：O(n),空间复杂度O(1)
standardAnswer = function(nums,val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    console.log(nums);
    return index;
}
// standardAnswer(nums, val);

// 方法二：双指针 —— 当要删除的元素很少时
standardAnswerTwo = function (nums, val) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }
    console.log(nums);
    
    return n;
}
let nums2 = [1,2,3,4];
standardAnswerTwo(nums2, val);
