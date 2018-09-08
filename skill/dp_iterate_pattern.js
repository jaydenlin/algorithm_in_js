var n=5;
//bottom up
//每一輪遞增的i, 和永遠小於i的j
for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
        console.log("k="+i+";k遞減="+(i-j));
    }
}
//i=1; i-j=0
//i=2; i-j=0,1
//i=3; i-j=0,1,2
//i=4; i-j=0,1,2,3
