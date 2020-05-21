/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const string = '';
    if (strs.length === 0) {
        return string;
    }
    const first = strs.shift();
    for (let i = 0; i < first.length; i++) {
        const firstStr = first.substr(0, i + 1);
        const common = strs.every(item => {
            return item.substr(0, i + 1) === firstStr;
        })
        if (common) {
            string = firstStr;
        }
    }
    return string;
};