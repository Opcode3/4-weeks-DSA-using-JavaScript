// d = 2
//  [1,2,3,4,5]

// 5 4
//1 2 3 4 5

// 1st move = [2,3,4,5,1]
// 2nd move = [3,4,5,1,2]
// 3rd move = [4,5,1,2,3]
// 4th move = [5,1,2,3,4]
//  O(n) * O(m) 
function rotateLeft(d, arr){
    for(let i = 1; i <= d; i++){
        for(let m = 0; m < arr.length; m++){

            if(m == 0){
                arr.push(arr[m]);
            }else{
                // arr = swap(arr, m - 1, m)
                let initValue = arr[m-1];
                arr[m-1] = arr[m];
                arr[m] = initValue;
            }

        }
        arr.pop()
    }
    return arr;
}


const d = 4;
const arr = [1,2,3,4,5]

console.log(
    rotateLeft(d,arr)
);



// function swap(arr, index_1, index_2){
//     const initValue = arr[index_1];
//     arr[index_1] = arr[index_2];
//     arr[index_2] = initValue;
//     return arr;
// }
