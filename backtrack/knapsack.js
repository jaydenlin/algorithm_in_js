var p = [40, 30 , 50, 10];
var w = [2, 5, 10, 5];
var n = p.length;
var include = [false, false, false, false];
var bestset;
var numbest;
var maxprofit=0;
var limitWeight = 16;
var knapsack = function(i, profit, weight){
    if(promising(i, profit, weight)){
        if(profit > maxprofit){
            maxprofit = profit;
            //clone array
            bestset = include.map((a)=>{
                return a;
            });
            numbest = i;
        }
        include[i+1] = true;
        knapsack(i+1, profit + p[i+1], weight + w[i+1]);
        include[i+1] = false;
        knapsack(i+1, profit, weight);
    }
}

var promising = function(i, profit, weight){
    if(i === n-1){
        return false;
    }
    //目前重量過大，就不往下走了
    if(weight > limitWeight){
        return false;
    }else{
        //假設i+1層以下全拿，必須要大於maxprofit才往下走
        var j =  i+1;
        var bound = profit;
        var totalWeight = weight;
        //全拿
        while(j<n && totalWeight + w[j] < limitWeight){
            totalWeight = totalWeight + w[j];
            bound = bound + p[j];
            j++;
        }
        //若全拿後，還有空間．看拿幾分之幾
        if(j<n){
            //看剩下的空間(limitWeight - totalWeight)可以拿多少價值的東西
            bound = bound + ((limitWeight - totalWeight)*p[j]/w[j]);
        }
       
        console.log("bound=", bound);
        console.log(include);
        console.log("maxprofit=", maxprofit);
        return bound > maxprofit;
    }
    //return true;
}
knapsack(-1, 0, 0);
p.map((v, i)=>{
    if(bestset[i]){
        console.log(p[i]);
    }
});
console.log(maxprofit);