
// 创建一个对象
var obj = {
    a:100,
    b:true,
    c:'逗号隔开'
}

obj.name = 'lightseeking'
delete obj.c
obj.name = 'LightSeeking'
console.log(obj.b)

console.log(obj)