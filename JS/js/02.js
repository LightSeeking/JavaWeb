// 一到三测试
var num = 100;

var result = typeof num

console.log(result)

// 数据类型转换
var s1 = '100.223'
var b1 = false;


var n1 = Number(s1)
var n2 = parseInt(s1)
var n3 = parseFloat(s1)

console.log(n1+"/"+n2+"/"+n3)
console.log(typeof n1+"/"+typeof n2+"/"+typeof n3)

var s2 = String(b1)
var s3 = b1.toString()
console.log(s2+'/'+s3)
console.log(typeof s2+'/'+typeof s3)

var b2 = Boolean(s1)
console.log(b2+'/'+typeof b2)