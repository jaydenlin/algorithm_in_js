var graph = [
    [4,2],
    [4],
    [0],
    [4],
    [0,1,3]
];
//     0
//    / \
//   2   4
//       / \
//      1   3
var visisted = {};

var dfs = function(cur){
    visisted[cur] = true;
    console.log(cur);
    var next = findAdj(cur);
    
    while(next!==-1) {
        dfs(next);
        next = findAdj(cur);
    }
}
var findAdj = function(cur) {
    var col = 0;
    // 處理 grpah 的第二維，
    while(col < graph[cur].length){
        if(visisted[graph[cur][col]]) {
            col ++;
        } else {
            return graph[cur][col];
        }
    }
    return -1;
}
dfs(0);