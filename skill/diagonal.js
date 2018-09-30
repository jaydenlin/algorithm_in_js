// 往左上對角線讀過去的座標
/**
 * 1. 透過一個 delta 值 diagonal 在最外圍，來調整i, j 的值
 * 2. 先想 i.j 之間的關係，再來套用 delta 值 diagonal 
 * e.g. i 的變化由 0 => 4 變成 0  => 3 變成 0  => 2 變成 0  => 1 變成 0  => 0
 */
const run = function(){
    const n = 5;
    let diagonal = 0;
    //diagonal 是一的遞增的 delta 值
    for(diagonal; diagonal < n; diagonal++){
        //i 是 x 軸
        //j 是 y 軸
        for(let i = 0 ; i < n - diagonal; i++){ //=> x 軸每一輪走過的值愈來愈少
            let j= i + diagonal;                //=> y 軸每一輪走過的值愈來愈多
            console.log(`A[${i}][${j}]`);
            //把i, j相反就是讀下半的斜線
        }
    }
    
}
run();

/**
 * [0,4][1,4][2,4][3,4][4,4]
 * [0,3][1,3][2,3][3,3][4,3]
 * [0,2][1,2][2,2][3,2][4,2]
 * [0,1][1,1][2,1][3,1][4,1]
 * [0,0][1,0][2,0][3,0][4,0]
 * 
 */