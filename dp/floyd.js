const W = [
    [0,1,999999,1,5],
    [9,0,3,2,999999],
    [999999,999999,0,4,999999],
    [999999, 999999, 2,0,3],
    [3, 999999, 999999, 999999, 0]
]
var D = []
var floyd = function(n, W, D){
    D=W;
    for(var k=0;k<n;k++) {
        for(var i=0; i<n;i++) {
            for(var j=0;j<n;j++) {
                //把 點 k 一個一個放進去，考慮 0...k 一一放進中繼點的情況
                //當 第 k 個被放進之後，已經考慮了 0 ... k-1 前面的所有情況了
                D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
            }
        }
    }
    return D;
}

console.log(floyd(W.length, W, D));