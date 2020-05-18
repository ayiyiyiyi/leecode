/**
 * 将数组分成和相等的三个部分
 * 
 * 
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。
 * 提示：
 * 1. 3 <= A.length <= 50000
 * 2. -10^4 <= A[i] <= 10^4
 */


 
/**
 * 思路一
 * 
 * @param {number[]} A
 * @return {boolean}
 */

var myCanThreePartsEqualSum = function(A) {
    const last = A.length - 1;
    let canPartition = false;
    for (let i = 0; i < last - 1; i++) {
        if (sum(0, i) * 2 === sum(i + 1, last)) {
            // console.log(i)
            for (let j = i + 1; j < last; j++) {
                if (sum(i + 1, j) === sum(j + 1, last)) {
                    console.log(i,j)
                    canPartition = true;
                    return;
                }
            }
        }
    }
    function sum(start, end) {
        let newA = A.slice(start, end + 1); // slice(start, end) 浅拷贝从 start 开始，到 end(不含 end) 结束的数组元素，生成新数组，不改变原数组
        let sum = newA.reduce((accumulator, current) => {
            return accumulator + current;
        }, 0)
        return sum;
    }
    return canPartition;
};

myCanThreePartsEqualSum([12,-4,16,-5,9,-3,3,8,0]);


/**
 * 思路二
 * 
 */
function canThreePartsEqualSum(A) {
    let canPartition = false;
    function sum(start, end) {
        let newA = A.slice(start, end + 1);
        let sum = newA.reduce((accumulator, current) => {
            return accumulator + current;
        }, 0)
        return sum;
    }
    const length =  A.length - 1;
    const sumA = sum(0, length);
    if (sumA % 3 !== 0) {
        return
    }
    let i = 0;
    while (i < length) {
        let res = sum(0, i);
        if (res * 3 !== sumA) {
            i++;
        } else {
            break
        }
    }
    let j = 0; // 从末尾开始完全
    while (j < length) {
        let res = sum(length - j, length);
        if (res * 3 !== sumA) {
            j++;
        } else {
            break
        }
    }
    const finalIndex =  length - 1 - j
    if (i < finalIndex) {
        canPartition = true;
    }
    return canPartition;
}

canThreePartsEqualSum([12,-4,16,-5,9,-3,3,8,0]);
