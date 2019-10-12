// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let fh = "", re;
    if(x<0){
        fh = "-";
        x = 0 - x;
    }
    re = ( x + "").split("").reverse().join("");
    console.log(re);
    if(re.length>10 || re.length === 10 && re > (x < 0 ? "2147483648":"2147483647")){
        return 0;
    }else{
        return fh + re;
    }
};
var number = 230;

function standanrAnswer (x) {
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = parseInt(x / 10);
        console.log(pop, x);
        
        let INT_MAX = 2 ** 31 - 1;
        let INT_MIN = -1 * (2 ** 31);
        if (rev > INT_MAX / 10 || (rev == INT_MAX / 10 && pop > 7)) return 0;
        if (rev < INT_MIN / 10 || (rev == INT_MAX / 10 && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
}
console.log(standanrAnswer(number))
