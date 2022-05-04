// ForEach, map, filter, reduce

// 1 = orange, 2 = mango, 3 = apple, 4 = banana
// [1,2,4,2,1,3,3,3,3,4,2,1]
// return the most occuring fruit in this array

function fruitCount(arr){
    let results = [0,0,0,0];

    arr.forEach( (element, index) => {
        switch(element){
            case 1: 
                results[0] += 1;
                break;
            case 2: 
                results[1] += 1;
                break;
            case 3:
                results[2] += 1;
                break;
            case 4:
                results[3] += 1;
                break;
        }
    });

    let maxIndex = 0;

    results.forEach( (frequency, index) => {
        maxIndex = (frequency > results[maxIndex]) ? index : maxIndex;
    })

    return maxIndex+1;
    
}

function fruitCount2(arr){

    const fruitMap = new Map();
    fruitMap.set('orange', 0);
    fruitMap.set('mango', 0);
    fruitMap.set('apple', 0);
    fruitMap.set('banana', 0);

    let maxFruit = 'orange';
    let maxFrequency = 0;

    let evaluateNewFruit = (fruit_name) => {
        fruitMap.set(fruit_name, fruitMap.get(fruit_name) + 1) //update
        if(maxFrequency < fruitMap.get(fruit_name)){
            maxFrequency = fruitMap.get(fruit_name);
            maxFruit = fruit_name;
        }
    }

    arr.forEach( fruit => {
        switch (fruit) {
            case 1:
                evaluateNewFruit('orange')
                break;
            case 2:
                evaluateNewFruit('mango')
                break;
            case 3:
                evaluateNewFruit('apple')
                break;
            default:
                evaluateNewFruit('banana')
                break;
        }
    })

    return maxFruit;
}




console.log(
    fruitCount2( [1,2,4,2,1,2,3,3,3,4,2,1] )
    // fruitCount( [1,2,4,2,1,3,3,3,3,4,2,1] )
)




