/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let string = ''
    if (strs.length === 0) {
        return string
    }
    let first = strs.shift();
    for (let i = 0; i < first.length; i++) {
        let firstStr = first.substr(0, i + 1)
        let num = strs.length;
        let common = strs.every(item => {
            return item.substr(0, i + 1) === firstStr
        })
        if (common) {
            string = firstStr
        }
    }
    return string
};