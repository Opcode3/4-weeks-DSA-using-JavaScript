//  n = 6, m = 4
 let n = 10, m = 3;
//  let n = 10, m = 5;

 solve(n,m);
// i = [1,2,3,4,5,6]

// sum = 1%4 + 2%4 + 3%4 + 4%4 + 5%4 + 6%4 = 1 + 2 + 3 + 0 + 1 + 2  = 9
// add = n%m = 2

// 1 + 2 + 0 + 1 + 2 + 0 + 1 + 2 + 0  { + 1


// N = 10, m = 5
// i = [1,2,3,4,5,6,7,8,9,10]

// sum = 1 + 2 + 3 + 4 + 0 + 1 + 2 + 3 + 4 + 0 = 20

// console.log(2%4)

function solve (n, m){
    let sum = 0;
    for(let i = 1; i <= n/2; i++){
        sum += (i%m);
    }
    console.log(sum * n/m);
}