//top down
//每次傳進遞減的n，遞增一個用遠小於n的j
var run = function(n){
  if(n<0){
    return;
  }
  for(var j=1;j<=n;j++){     
      console.log("k="+n+";k遞減="+(n - j));
      run(n - j);
  }
  
}
run(5);
//node dp_recursive_pattern.js | sort -u
//因為每次n-j的結果, 有可能會有重複的值傳入
//e.g. 9減4 或是 8減4  
//
//n=5; n-j=4,3,2,1,0
//n=4; n-j=3,2,1,0
//n=3; n-j=2,1,0
