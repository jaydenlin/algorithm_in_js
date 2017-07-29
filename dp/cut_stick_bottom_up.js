var value = [null, 1, 5, 8, 9];//value[1]=1;代表一個單位價值1，value[2]=5代表兩個單位價值5
var n = 4;
var stick=[];
stick[0]=0;//stick[1] = 1 代表當n=1時，切後價值最大為1
//stick[n] = max(value[i], stick[n - i] + value[i])
for(var i=1;i<=n;i++){
        stick[i]=0;
        for(var j=1;j<=i;j++){
            if(stick[i-j]+value[j] > stick[i]){
                // console.log(stick[i]);
                stick[i] = stick[i-j]+value[j];
            }
        }
    }
console.log(stick[n]);
//top down 從stick[0]開始往下算