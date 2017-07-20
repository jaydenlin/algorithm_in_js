var graph = [
    [false,true,true,false,false,false,false,true],
    [true,false,true,false,false,false,true,true],
    [false,true,false,true,false,true,false,false],
    [false,false,true,false,true,false,false,false],
    [false,false,false,true,false,true,false,false],
    [false,false,true,false,true,false,true,false],
    [false,true,false,false,false,true,false,true],
    [true,true,false,false,false,false,true,false]
]
var n = graph.length;
var result = [];
var final = [];
var ham = function(i){
    if(promising(i)){
        if(i === n-1 ){
            final.push(result);
            console.log(result);
        }else{
            for(var j = 0; j < n;j++){
                result[i+1] = j;
                ham(i+1);
            }
        }
    }
}

var promising = function(i){
    var switchNode = true;
    //走到底時，要確認result首尾要相連
    if(i===n-1 && !graph[result[n-1]][result[0]]){
        switchNode = false;
    //走到一半時，要確認result間前後先連    
    }else if(i>0 && !graph[result[i-1]][result[i]]){
        switchNode = false;
    } else {
        var j = 0;
        //檢查點是否已經有出現過了
        while(j < i && switchNode){
            if(result[i] === result[j]){
                switchNode = false;
            }
            j++;
        }
    }
    return switchNode;
}

ham(-1);
console.log(final.length===32);
