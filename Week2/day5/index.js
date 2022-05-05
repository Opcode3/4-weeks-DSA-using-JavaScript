// object, filter, reduce

// ForEach, map and Filter (iterate)

// const obj_1 = {
//     name: 'Opcode',
//     age: 21,
//     gender: 'male'
// } 

// const testScore = [20,12,20,19,10,6,14];

// const ConsScore = testScore.filter( score => score < 15 ) 
// const govScore = testScore.filter( score => score >= 15 ) 

// console.log(govScore);
// console.log(ConsScore);

// newTestScore = testScore.map( score => score + 5)

// console.log(newTestScore)

// const user = new Map();
// user.set('name', 'Opcode')
// console.log(obj_1.name);
// console.log(user.get('name'))


const students = [
    {
        id: 1,
        name: "student 0",
        class: "primary 3",
        gender: "male",
        age: 9
    },
    {
        id: 2,
        name: "student 1",
        class: "primary 3",
        gender: "male",
        age: 10
    },
    {
        id: 3,
        name: "student 4",
        class: "primary 1",
        gender: "female",
        age: 10
    }

]


function pupilsAge(pupils){
    const age10Pupils = pupils.filter( 
        pupil =>  pupil.age == 10
    )

    return age10Pupils;
}

console.log(
    pupilsAge(students)
)