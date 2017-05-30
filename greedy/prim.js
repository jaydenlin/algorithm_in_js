//                a
//       12  /    |8   \ 13
//        b   _    c       d
//   32 /  |7   21  |         \ 9 
//     e    f ______|2           g


var graph = [
      //a    b    c   d    e        f         g
/*a*/ [ 0,  12,   8,  13, Infinity,Infinity, Infinity ],
/*b*/ [ 12, 0,   21,  Infinity,32,   7,      Infinity ],
/*c*/ [ 8,  21,   0,  Infinity,Infinity,2,   Infinity ],
/*d*/ [ 13, Infinity, Infinity,0, Infinity,Infinity, 9    ],
/*e*/ [ Infinity,32, Infinity, Infinity, 0, Infinity, Infinity],
/*f*/ [ Infinity, 7,  2,  Infinity,Infinity,0,   Infinity ],
/*g*/ [ Infinity,Infinity,Infinity,9, Infinity, Infinity, 0   ]
];

var dist_to_mst = []; //dist_to_mst[0]=0，代表mst距離a的距離為0
var nearest_vertex = []; //nearest_vertex[0]=2時，代表距離a最近的點是c，用來存最後結果用的
var choosed = [];
var count = 0;
var vnear = 0;//下一個要加入的點

//先將a加入mst
choosed[0] = true;
//初始化dist_to_mst，目前mst只有a這一點，所以dist_to_mst就是a點到其他點的距離
graph[0].map(function(v, index){
      nearest_vertex[index]=0;
      dist_to_mst[index]=v;
});
//console.log(dist_to_mst);

while(count < graph.length){
    min = Infinity;
    //掃dist_to_mst，找出下一個要加入的點，設定成vnear
    //從b開始找，所以設定i=1,
    for(var i = 1; i < dist_to_mst.length; i++){

        if(0 <= dist_to_mst[i] < min){
            if(choosed[i]!==true){
                min = dist_to_mst[i];        
                vnear = i;
            } 
        }
        choosed[vnear] = true;
        //透過vnear更新目前的dist_to_mst
        for(var j=1; j < dist_to_mst.length; j++){
            if(graph[j][vnear] < dist_to_mst[j] && j!==vnear){
                //更新到j的距離
                dist_to_mst[j] = graph[j][vnear];
                //到j最近的點設為vnear
                nearest_vertex[j] = vnear;
            }
        }
    }

    count++;
}

console.log(dist_to_mst);
console.log(nearest_vertex);