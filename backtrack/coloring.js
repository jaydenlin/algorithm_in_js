var graph = [
    [false, true, true, true],
    [true, false, true, false],
    [false, true, false, true],
    [true, false, true, false]
]
var vcolor =[];
var m = 4;
var n = graph.length;
var coloring = function(i){
    // console.log(i);
    if(promising(i)){
        if(i===n){
            console.log(vcolor);
        }else{
            for(var color = 0; color < m ; color++){
                vcolor[i+1] = color;
                coloring(i+1);
            }
        }
    }
}

var promising = function(i){
    var switchNode = true;
    var j = 0;
    while(j<i && switchNode && i < graph.length-1){
        if(graph[i][j] && vcolor[i]===vcolor[j]){
            switchNode=false;   
        }
        j++;
    }
    return switchNode;
}
coloring(-1);