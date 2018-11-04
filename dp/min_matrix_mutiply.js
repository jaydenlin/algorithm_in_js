//A0 5x2 d0xd1
//A1 2x3 d1xd2
//A2 3x4 d2xd3
//A3 4x6 d3xd4
//A4 6x7 d4xd5
//A5 7x8 d5xd6

var d = [5,2,3,4,6,7,8] // d 有重複在不同矩陣使用

var M = [
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined]
]
var n = 6;
var min = function(n){
    for(var offset = 0; offset < n; offset ++) {
        for(var i=0; i < n - offset; i++) { //i 為 y 軸
            var j = i + offset; // j 為 x 軸
            console.log(`M[${i}][${j}]`);
            if(i===j) {
                M[i][i] = 0;
            }
            if(i<j) {
                // k 介於 i 和 j-1 之間
                // var temp = null;
                for(var k=i;k<j;k++) {    
                    //注意 d 的位置要確切的對上
                    //例如當 i 等於 k 的時候，使用 d[${i}]*d[${k}]*d[${j}] 就會出錯
                    console.log(`M[${i}][${k}] + M[${k+1}][${j}] + d[${i}]*d[${k+1}]*d[${j+1}]`);
                    console.log(M[i][k] + M[k+1][j] + d[i]*d[k+1]*d[j+1]);
                    M[i][j] = M[i][k] + M[k+1][j] + d[i]*d[k+1]*d[j+1];
                }
                
                
            }
            
        }
    }
    
    return M;
}

console.log(min(n));
