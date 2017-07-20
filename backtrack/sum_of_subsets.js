var target = 21;
var w = [5, 6, 10, 11, 16];
var total = w.reduce((a, b)=> a + b);
var include =[false,false,false,false,false];
var sum = function(i, weight, total){
    // console.log(promising(i, weight, total));
    if(promising(i, weight, total)){
        // console.log(weight);
        if(weight === target){
            console.log(include);
        }else{
            //左子樹
            include[i+1] = true;
            sum(i+1, weight + w[i+1], total - w[i+1]);
            //右子樹
            include[i+1] = false;
            sum(i+1, weight, total - w[i+1]);
        }
    }
};

var promising = function(i, weight, total){
    return (weight + total >= target) && (weight == target || weight + w[i+1] <= target); 
};
// console.log(total);
sum(-1, 0, total);
//重點摘要
//1. 自子節點要存的值，可以透過遞迴在函數參數裡傳遞
//2. 不一定要用for迴圈展開子樹，也可以用兩個地回來展開