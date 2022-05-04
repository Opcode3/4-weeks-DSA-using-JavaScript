// graph
// Tree
// Linkedlist
// Stack
// Queue
// Array or List


// head >  tail


// Build a function that evaluate if a number is prime 
// positive number


// constriants

console.log( isPrime(7) ? "Number is prime" : "Number is not prime")



function isPrime(number){ // O(n)
    let is_prime = true; // O(1)
    if((number <= 1) || (number != 2 && number % 2 == 0)) return false; // O(1)
    if(number == 2) return true; // O(1)

    for(let i = 3; i < number; i++){  // O(n) - 1
        if(number % i == 0){
            is_prime = false;
            break;
        }
    }
    return is_prime;
}



                         


