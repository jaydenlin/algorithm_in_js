var graph = [
    [4,2],
    [4],
    [0],
    [4],
    [1,3]
]
//     0
//    / \
//   2   4
//       / \
//      1   3
visisted = {};
queue = [];
var bfs = function (start) {
    queue.push(start);
    var cur = graph[start];
    while(queue.length > 0){
        //enqueue
        for(var i=0; i< cur.length; i++){
            if(visisted[cur[i]]===undefined && queue.indexOf(cur[i])===-1){
                queue.push(cur[i]);
            }
        }
        //dequeue
        var el = queue.shift();
        var cur = graph[el];
        visisted[el] = true;
        console.log(el);        
    }
}
bfs(0);