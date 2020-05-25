<!--
Created: Mon May 25 2020 10:12:30 GMT+0800 (中国标准时间)
Modified: Mon May 25 2020 10:12:30 GMT+0800 (中国标准时间)
-->

# 数组中的K-diff数对

## 题目:

给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.

示例 1:

``` js
输入: [3, 1, 4, 1, 5], k = 2
输出: 2
解释: 数组中有两个 2 - diff 数对, (1, 3) 和(3, 5)。
尽管数组中有两个1， 但我们只应返回不同的数对的数量。
```

示例 2:

```js
js
输入: [1, 2, 3, 4, 5], k = 1
输出: 4
解释: 数组中有四个 1 - diff 数对, (1, 2), (2, 3), (3, 4) 和(4, 5)。
```

示例 3:

``` js
输入: [1, 3, 1, 5, 4], k = 0
输出: 1
解释: 数组中只有一个 0 - diff 数对，(1, 1)。
```

提示:
数对 (i, j) 和数对 (j, i) 被算作同一数对。
数组的长度不超过10, 000。
所有输入的整数的范围在 [-1e7, 1e7]。

## 思路:

### 暴力解法

双循环找出相减绝对值等于 k 的对数

### map


1. 使用set 来构建visit 和 leftMap 避免重复
2. leftMap 用来存储满足题意的k-diff数组对中小一点的值，避免重复
3. 最后返回 leftMap 的大小即可

```js
var findPairs = function(nums, k) {
    if (k < 0) return 0;
    let visit = new Set(), leftMap = new Set();

    for (let n of nums) {
        if (visit.has(n - k)) {
            leftMap.add(n - k); // 用来存储满足题意的k-diff数组对中小一点的值，避免重复
        }
        if (visit.has(n + k)) {
            leftMap.add(n); // 用来存储满足题意的k-diff数组对中小一点的值，避免重复
        }
        visit.add(n);
    }
    console.log(visit, map);
    return map.size;
}
```

