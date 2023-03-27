// 冒泡排序
var arr = [9, 3, 6, 2, 4, 1, 8, 5, 7]

var temp = 0;

for (var i = 0; i < arr.length - 1; i++) {

    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}

console.log(arr)

// 选择排序
var arr = [9, 3, 6, 2, 4, 1, 8, 5, 7]



for (var i = 0; i < arr.length - 1; i++) {

    var minIndex = i;
    for (var j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    var temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
}

console.log(arr)