var arr = [100, true, 'array']
console.log(arr)
console.log('数组长度为：' + arr.length)
arr[1] = false
console.log('数组第2个元素为：' + arr[1])

// 遍历数组
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}