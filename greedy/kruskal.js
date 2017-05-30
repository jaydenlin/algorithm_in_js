//                a
//       12  /    |8   \ 13
//        b   _    c       d
//   32 /  |7   21  |         \ 9 
//     e    f ______|2           g

//每個點的代號
//a:0
//b:1
//c:2
//d:3
//e:4
//f:5
//g:6

//每個邊的代號
//0 a-b = 12
//1 b-e = 32
//2 a-c = 8
//3 b-c = 21
//4 b-f = 7
//5 c-f = 2
//6 a-d = 12
//7 d-g = 9

var disjoint_set = [];
//初始化disjoint_set
disjoint_set=[-1,-1,-1,-1,-1,-1,-1];//-1代表root
var findRoot = (vertex)=>{
   if(disjoint_set[vertex] === -1){
      return vertex;
   }   
   return disjoint_set[vertex]=findRoot(disjoint_set[vertex]);//把tree壓平的技巧，把找到的root直接設成parent
}

//紀錄邊的技巧，st[0], ed[0]代表第0號邊的起始點，與結束點, cost[0]代表第0號邊的權重
var st = [0,2,0,1,1,2,0,3]; 
var ed = [1,4,2,2,5,5,3,6];
var cost = [12,32,8,21,7,2,12,9];
var ind = [0,1,2,3,4,5,6,7]; //透過索引排序的技巧，存8條邊的索引，只排序索引再透過索引取cost跟st, ed，通常用在要排序的東西有很多property要取的時候
var total_edge = 8;
var total_cost = 0;
var choosed_edge = []; //用來記錄用的 choosed_edge[1]= true代表，邊1有被選中

//把邊做排序
ind.sort(function(a,b){
      return cost[a] - cost[b];
});
// ind.map(function(v){
//     console.log(cost[v]);
// });
// 
var i = 0;
while(i<total_edge){
      var vx1 = findRoot(st[ind[i]]);
      var vx2 = findRoot(ed[ind[i]]);
      if(vx1 !== vx2){//不同set
           disjoint_set[vx2] = vx1;
           total_cost = total_cost + cost[ind[i]];
           choosed_edge[ind[i]] = true;
      }

      i++;
}

console.log(choosed_edge);
console.log(total_cost);

//Kruskal演算法，就是將disjoint set不斷加上邊的過程

//預備知識
//1.  disjoint set，用陣列表示tree的技巧
//2.  索引排序, 只排索引，來取property
//3.  紀錄邊的技巧st, ed, cost
//4.  sort的compare funciton怎麼寫 a - b 小到大，b - a 大到小
