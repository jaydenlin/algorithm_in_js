//top down
var bin=function(n, k){
    if(k==0 || k==n){
        return 1;
    }
    return bin(n-1, k-1) + bin(n-1, k);
}

console.log(bin(6,2));//15

//bottom up
var bin2 = function(n, k){
    //初始化二維的空陣列
    //注意這裡的二維陣列是 B[n+1][k+1] 因為有 0 是 B[0...n][0...k]  
    var B = new Array(n+1);
    for (var index = 0 ; index < B.length ; index++) {
        B[index] = new Array(k+1);
    }

   
    for(var i=0;i <= n ;i++){  //因為是 0..n 所以用 <=
        for(var j=0;j <= Math.min(i,k);j++) {   //因為是 0..k 所以用 <=
            if(j===0 || j===i) {
                
                B[i][j] = 1; 
            }else {
                
                B[i][j] = B[i-1][j-1] + B[i-1][j];
            }
            
            
        }
    }
    return B[n][k];
}
console.log(bin2(6, 2));
