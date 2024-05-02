// 가장 먼저 찾는게 우선!
var element = document.querySelector('.container');
console.log(element)

// 모든 친구 배열로 가져옴.
var element = document.querySelectorAll('.container');
console.log(element[0])
console.log(element[0].children)

var element = document.querySelectorAll('.container .text')
console.log(element)
