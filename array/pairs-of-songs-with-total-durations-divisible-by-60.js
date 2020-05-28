/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const len = time.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        const base = time[i];
        for (let j = i + 1; j < len; j++) {
            const val = time[j];
            if ((base + val) % 60 === 0) {
                res++;
            }
        }
    }
    console.log(res)
    return res;
};

// numPairsDivisibleBy60([30,20,150,100,40])

function numPairsDivisibleBy60_two(time) {
    let array = Array.from({length: 60},() => 0)
    time.forEach(i => {
        const n = i % 60;
        array[n] = array[n] + 1;
    });
    let res = 0;
    // 在30 和 0 是,需要两两排列组合 也就是 C(n, 2) = n * (n - 1) /2
    res += array[0] * (array[0]  - 1) / 2;
    res += array[30] * (array[30]  - 1) / 2;

    for (let i = 1; i < 30; i++) {
        res += array[i] * array[60 - i];
    }
    console.log(res)
}
numPairsDivisibleBy60_two([30,20,150,150,100,40])
numPairsDivisibleBy60_two([60,60,60])
