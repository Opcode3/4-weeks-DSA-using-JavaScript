// Write a program to evaluate if a number is even

// 4 % 3 = 0
function isEven2(number){
    if(number % 2 == 0){
        console.log(number+" is an even number!");
    }else{
        console.log(number+" is not an even number!");
    }
}

const isEven = number => {
    console.log( (number % 2 == 0) ? `${number} is even` : `${number} is not even` );
}

// isEven(2);
// isEven(5);

// 3,4,6,7

const num = [3,4,6,7]; // initialized an array


// for(let count = 0; count < num.length; count++){
//     console.log(num[count]);
// }

// for, while, do while
// map, filter, foreach, reduce

// Ass : build a function that will evaluate the 4th term of an AP.
// { 1, 3, 5, 7, 9,}

// d = (2th - 1th) || (3th - 2th) || (4th - 3th)  = 2
// nth = An + (n - 1)d

// 4th = A + (4 - 1)d
// 4th = A + 3d === Model

// n1 = 1;
// n2 = 1 + (2-1)2
// n2 = 1 + 4 - 2 = 5 - 2 = 3

function fourthTermAP(first_term, common_difference){
    return first_term + (3 * common_difference);
}

console.log( fourthTermAP(1, 2) );








