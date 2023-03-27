var money = 10000;
if (money > 5000) {
    console.log("余额大于5000")
}

// 判断是否为闰年的函数
function runnian(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(year + "是闰年")
    } else {
        console.log(year + "是平年")
    }
}



// 判断2078是平年还是闰年
var year = 2080
runnian(year)

// 一年中的第几天
var year = 2008
var month = 8
var day = 8
var num = day;

function addNum(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 29
    }
    return 28
}

switch (month - 1) {
    case 11:
        num += 30
    case 10:
        num += 31
    case 9:
        num += 30
    case 8:
        num += 31
    case 7:
        num += 31
    case 6:
        num += 30
    case 5:
        num += 31
    case 4:
        num += 30
    case 3:
        num += 31
    case 2:
        num += addNum(year)
    case 1:
        num += 31
        break
    default:
        num += 0
}
console.log(num)

// while循环
var n = 0;
while (n < 3) {
    console.log(n + '小于3，继续循环')
    n++
}
console.log(n + '不小于3，跳出循环');

// dowhile循环,产生随机数，判断结果
// var num1 = Math.floor(Math.random() * 10 + 1)
// var num2 = Math.floor(Math.random() * 10 + 1)
// do {
//     var result = prompt(num1 + '+' + num2 + '=?')
// } while (result != num1 + num2)

// for循环输出1-100中17的倍数
console.log('1-100中17的倍数有:')
for (var n = 1; n <= 100; n++) {
    if (n % 17 == 0) {
        console.log(n)
    }
}

// 打印正方形
for (var i = 0; i < 9; i++) {
    for( var j = 0; j<9; j++){
        document.write('* ')
    }
    document.write('</br>')
}

// 打印乘法表
for(var i = 1;i<10;i++){
    for(var j = 1 ; j<=i;j++){
        document.write(i+'*'+j+'='+i*j+'&emsp;')
    }
    document.write('</br>')
}
