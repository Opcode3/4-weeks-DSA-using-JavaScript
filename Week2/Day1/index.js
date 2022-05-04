// const arr = [1,2,3,4,10,11,7];
const arr = [1,2,3,4,10,11];

console.log(ArraySum2(arr));
console.log(ArraySum(arr));


function ArraySum2(arr){ //O(log N)
    const arrLen = arr.length; 
    let sum = 0;
    if(arrLen % 2 == 1){

        sum += arr[Math.floor(arrLen/2)]

        for(let m = 0; m < Math.floor(arrLen/2); m++){

            sum += (arr[m] + arr[ (Math.ceil(arrLen/2) + m) ])
            
        }
    }else{
        for(let m = 0; m < Math.floor(arrLen/2); m++){

            sum += (arr[m] + arr[ (Math.floor(arrLen/2) + m) ])
            
        }
    }

    return sum;

}

function ArraySum (arr){  // O(n)
    let sum = 0; //O(1) 
    for(let i=0; i < arr.length; i++){  
        sum += arr[i];
    }
    return sum;
}