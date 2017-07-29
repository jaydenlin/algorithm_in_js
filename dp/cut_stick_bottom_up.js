var value = [null, 1, 5, 8, 9];//value[1]=1;代表一個單位價值1，value[2]=5代表兩個單位價值5
var n = 4;
var dp=[];
dp[0]=0;//dp[1] = 1 代表當n=1時，切後價值最大為1
//max(value[i], stick(n - i) + value[i])
var stick = function(){
    for(var i=1;i<=n;i++){
        dp[i]=0;
        for(var j=1;j<=i;j++){
            if(dp[i-j]+value[j] > dp[i]){
                console.log(dp[i]);
                dp[i] = dp[i-j]+value[j];
            }
        }
    }
    return dp[n];
};
console.log(stick());
//top down 從dp[0]開始往下算