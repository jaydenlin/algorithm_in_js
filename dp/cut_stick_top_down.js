var value = [null, 1, 5, 8, 9];//value[1]=1;代表一個單位價值1，value[2]=5代表兩個單位價值5
var n = 4;
var dp=[0, -1, -1, -1, -1];
dp[0]=0;//dp[1] = 1 代表當n=1時，切後價值最大為1
//stick(n) = max(value[i], stick(n - i) + value[i])
var stick = function(L){
    if(dp[L]!==-1){ return dp[L]}
    dp[L]=0;
    for(var i=1;i<=L;i++){
        var tmp = stick(L-i)+value[i];
        if(tmp > dp[L]){
            dp[L]=tmp;
        }
    }
};
stick(n);
console.log(dp[n]);
//top down 從stick(n)開始往下算