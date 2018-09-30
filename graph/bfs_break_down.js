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
var queue = [];
var col = 0;

var bfs = function(cur){
    //先拜訪再放進 queue
    visisted[cur] = true;           //-> 拜訪
    console.log(cur);     
    queue.push(cur);                //-> 放 queue
    var toFindAdj = queue.shift();  //-> 取出

    //處理 queue 的迴圈，先前被 queue 進去的要拿出來處理
    while(typeof toFindAdj!=="undefined"){
        var next = findAdj(toFindAdj, true); //=> 取出第一個相鄰點
        // 處理 grpah 的第一維，找相鄰的點
        while(next!==-1) {
            visisted[next] = true;
            console.log(next);
            queue.push(next);
            next = findAdj(toFindAdj, false); //=> 取出剩下的相鄰點
        }
        toFindAdj = queue.shift();    
    }
}

var findAdj = function(cur, isFirstTime) {
    if(isFirstTime) {
        col = 0;
    }else {
        col++;
    }
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
bfs(0);

/**
 1. 先拜訪再放進 queue
 2. 總共有三個迴圈
 (1) queue 的迴圈
 (2) graph 第一維的迴圈
 (3) graph 第二維的迴圈 => 以我們鄰接矩陣的存法，其實不用掃第二層，有存的都是相鄰

 3. 取出第一個相鄰點跟剩下的相鄰點，之所以有不同，是為了讓 col 歸零
  
 */
