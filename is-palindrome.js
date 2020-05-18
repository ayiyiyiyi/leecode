//判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
    let index, residue, arr = [], palindrome = true;
    if ( num < 0) {
        palindrome = false;
        return palindrome;
    }
    while (num != 0) {
        residue = num % 10;
        num = parseInt(num / 10);
        arr.push(residue);
    }
    index = parseInt((arr.length + 1) / 2);
    for (let i = 0; i < index; i++) {
        let j = (arr.length - 1) - i;
        if (arr[i] != arr[j] ) {
            palindrome = false;
        }
    }
    return palindrome;
};
var x = 12321;

// 第二个想法是将数字本身反转，然后将反转后的数字与原始数字进行比较，如果它们是相同的，那么这个数字就是回文。
//但是，如果反转后的数字大于 int.MAX，我们将遇到整数溢出问题。
// 为了避免数字反转可能导致的溢出问题，只反转 int 数字的一半,因为如果该数字是回文，其后半部分反转后应该与原始数字的前半部分相同。
// 关键是如何知道反转数字的位数已经是原始数字位数的一半了？
//官方给出的方法是： 将原始数字除以 10，然后给反转后的数字乘上 10，所以，当原始数字小于反转后的数字时，就意味着已经处理了一半位数的数字。
var standardAnswer = function (num) {
    let res = 0, palindrome = false;
    while (num != 0 && !palindrome) {
        let residue = num % 10;
        num = parseInt(num / 10);
        res = res * 10 + residue;
        let half = parseInt(num / 10) ;
        if (res * 10 > half) {
            if (res == half) {
                palindrome  = true;
            }
        }
        console.log(res, half);
    }
    return palindrome;
}
console.log(standardAnswer(12321));
