var value = [2,4,3,1,6,7,8,9,1,7];
var n = value.length;
var max = 0;
var mcs=[];
mcs[0] = value[0];
//mcs[i] = value[i] , mcs[i-1]<0  
//         value[i] + mcs[i] otherwise      
for(var i=1;i<n;i++){
    if(mcs[i-1]<0){
        mcs[i] =  value[i];
    }else{
        mcs[i] = value[i] + mcs[i-1]; 
    }
    if(mcs[i]>max){
        max = mcs[i];
    }
}
console.log(max);