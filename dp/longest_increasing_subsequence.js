var value =[9,11,2,13,1,15];
var from  = [-1,-1,-1,-1,-1];
var n = value.length;
//計算在我之前的lis是多少
//lis[i] = max(lis[i] + 1)
var lis=[];
lis[0] = 0;
var max = 0;

for(var i=0;i<n;i++){
    lis[i] = 1;//至少有自己
}
for(var i=1;i<n;i++){
    for(var j=0;j<i;j++){
        if(value[j]<value[i] && lis[j]+1>lis[i]){
            lis[i] = lis[j]+1;
            from[i] = j;//從j之後接上這個元素是lis,若為-1則是自己i接自己i，所以可以從這個表推論出lis陣列內容
        }
    }
    if(lis[i]>max){
        max = lis[i];
    }
}
console.log(max);
console.log(from);