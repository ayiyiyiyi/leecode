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

numPairsDivisibleBy60([30,20,150,100,40])