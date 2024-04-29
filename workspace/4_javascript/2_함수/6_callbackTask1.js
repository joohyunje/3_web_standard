// 숫자를 하나 전달하면 객체를 리턴하도록 만드는데,
// 콜백 1 : 해당 숫자가 '짝수'인지 '홀수'인지
// 콜백 2 : 1 ~ 숫자 까지의 합을 받아오기.
// 객체의 키값은 마음대로 해도된다.
function test(num, callback1, callback2){
    let type = callback1(num);
    let sum = callback2(num);
    let obj = {
        여부 : type,
        합 : sum
    }
    return obj;
}

function checkType(num){
    return num%2==1 ? '홀수' : '짝수';
}

function getSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}
console.log(test(10, checkType, getSum));

