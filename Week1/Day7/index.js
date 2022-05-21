
const arr = [1,2,3,4,5];
const arr2 = [2,3,4,5,8];

let results = [];

for(let m = 0; m < arr.length; m++){ // exclusing   O(n^2)
    let sum = 0;  
    for(let n = 0; n < arr.length; n++){
        sum += (m != n) ? arr[n] : 0;
    }
    results.push(sum)
    // console.log(m+": "+sum)
}

let minSum = results[0];
let maxSum = results[0];
for(let i = 1; i < results.length; i++){  //O(n)
    minSum = (minSum > results[i]) ? results[i] : minSum;
    maxSum = (maxSum > results[i]) ? maxSum : results[i];
}

// O(n^2) + O(n) = O(n^2)
console.log(`${minSum} ${maxSum}`)
