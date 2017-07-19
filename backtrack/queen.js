var result = [];
var n = 8;
var col = []; //col[row] = col; 即在row放col位置，eg. col[1] = 2;在row 1 放 col 2
var queen = function (i) {   
    if (promising(i)) {
        //走到最後一層就把目前放的答案印出來
        if (i == n - 1) {
            console.log(col);
            result.push(col);
        } else {
            //放放看各種位置，即樹的分支
            for (var j = 0; j < n; j++) {
                col[i + 1] = j;
                queen(i + 1);
            }
        }
    }
}
var promising = function (i) {
    var switchNode = true;
    var k = 0;
    //看i層之前有沒有衝突
    while(k < i && switchNode){
        if(col[i] === col[k] || Math.abs(col[i] - col[k]) === i - k){
            switchNode = false;
        }
        k++;
    }
    return switchNode;
    // console.log(switchNode);
};
queen(-1);//因為第一次計算是在遞迴裡要queen(i+1)，為了要計算到0那個位置所以先傳-1進去
console.log(result.length==92);

//1. for迴圈裡放遞迴是常見的樹分支處理方式 
//2. col空間重複利用，存放解答