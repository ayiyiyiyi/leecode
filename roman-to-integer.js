/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const obj = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900};
    const single = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let number = 0;
    Object.keys(obj).forEach(item => {
        if (s.indexOf(item) !== -1) {
            number += obj[item];
            s = s.replace(item, '')
        }
    })
    let array = s.split('');
    for (let i = 0; i < array.length; i++) {
        const s = array[i];
        number += single[s];
    }
    return number;
};