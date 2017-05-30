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

//用dijkstra求a到其他點的最短路徑

var dist = []; //dist[2]=8，代表a到c的最短距離為8
var nearest_vertex = []; //nearest_vertex[0]=2時，代表距離a最近的點是c，用來存最後結果用的
var choosed = [];
var count = 0;
var vnear = 0;//下一個要加入的點

//先將a加入graph
choosed[0] = true;
//初始化dist，目前graph只有a這一點，所以dist就是a點到其他點的距離
graph[0].map(function(v, index){
      nearest_vertex[index]=0;
      dist[index]=v;
});
//console.log(dist);

//因為有graph.length個點，所以 dist 要更新graph.length次
while(count < graph.length){
    min = Infinity;
    //掃dist，找出下一個要加入的點，設定成vnear
    //從b開始找，所以設定i=1,
    for(var i = 1; i < dist.length; i++){
        //找出最小的距離的點，並且不在choosed[i]中，則設定成vnear
        if(0 <= dist[i] < min){
            if(choosed[i]!==true){
                min = dist[i];        
                vnear = i;
            } 
        }
        choosed[vnear] = true;
        //透過vnear更新目前的dist
        for(var j=1; j < dist.length; j++){
            //若發現a透過vnear到j的距離，比a直接到j更短
            if(dist[vnear] + graph[j][vnear] < dist[j] && j!==vnear){
                //更新a到j的距離
                dist[j] = dist[vnear] + graph[j][vnear];
                //到j最近的點設為vnear
                nearest_vertex[j] = vnear;
            }
        }
    }

    count++;
}

//console.log(dist);
console.log(nearest_vertex);//nearest_vertex[2]=5，代表c連到f

//Prim演算法，就是不斷更新dist的過程
//以點為主體，一個一個點加上去
