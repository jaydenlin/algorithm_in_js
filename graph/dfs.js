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
var dfs = function (start) {
    var i = 0;
    //visit the node
    console.log(start);
    visisted[start]=true;

    //find the next
    for (i; i < graph[start].length; i++) {
        var cur = graph[start][i];
        //終止條件
        if (visisted[cur] === undefined) {
            dfs(cur);
        }
    }
    
}
dfs(0);

// $ node dfs.js
// 0
// 4
// 1
// 3
// 2