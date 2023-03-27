// 定义函数
function printS(a,b) {
    console.log('函数定义:'+(a+b))
}
// 调用函数
printS(1,2)

// 递归函数计算100的阶乘
function factorial(n){
    if(n==1){
        return 1
    }

    return n*factorial(n-1)
}
console.log('递归计算10的阶乘结果：'+factorial(10))

// 计算斐波那契数列第n位
function series(n){

    if(n==1||n==2){
        return 1
    }
    return series(n-1)+series(n-2)
}
console.log('斐波那契数列第8位是：'+series(8))