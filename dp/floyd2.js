const W = [
    [0,1,999999,1,5],
    [9,0,3,2,999999],
    [999999,999999,0,4,999999],
    [999999, 999999, 2,0,3],
    [3, 999999, 999999, 999999, 0]
]
var D = []
//要能夠印出最短路徑上的點

//init p
var P = new Array(5).fill(-1).map(() => new Array(5).fill(-1));//P[i][j] 即 P[0][4] 是指點 0 到點 4 的最短路徑上的最大索引值

var floyd2 = function(n, W, D){
    D=W;
    for(var k=0;k<n;k++) {
        for(var i=0; i<n;i++) {
            for(var j=0;j<n;j++) {
                if(D[i][k] + D[k][j]<D[i][j]) {
                    // k 從小到大放進來，最後一個放入的會是最大的索引值
                    P[i][j]=k;
                    D[i][j] = D[i][k] + D[k][j];
                }
                
            }
        }
    }
    console.log(P);
    return D;
}
floyd2(W.length, W, D);

//印出路徑，但不保證順序
var path = function(r, q){
    if(P[r][q]!==-1) {
        path(r, P[r][q]);
        console.log(P[r][q]);
        path(P[r][q], q);
    }
}
 path(0,4);