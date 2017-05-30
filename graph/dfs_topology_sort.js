var graph = [
    [4,2],
    [4],
    [0],
    [4],
    [1,3]
];
//     0
//    / \
//   2   4
//       / \
//      1   3
var backtrace_record = [];
var visisted = {};
var dfs = function (start) {
    var i = 0;
    //visit the node
    console.log(start);
    visisted[start]=true;

    //find the next
    //the resursive function in the fo loop will be ended
    for (i; i < graph[start].length; i++) {
        var cur = graph[start][i];
        if (visisted[cur] === undefined) {
            dfs(cur);
        }
    }
    //紀錄走不下去的回溯順序
    backtrace_record.push(start);
    
}
dfs(0);
console.log(backtrace_record.reverse());//反過來印就是拓墣排序了

// $ node dfs.js
// 0
// 4
// 1
// 3
// 2