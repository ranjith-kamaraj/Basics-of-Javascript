//Adding element in the array
let numbers = [1, 2]
//End - push
numbers.push(4, 5)
//Front - unshift
numbers.unshift(10, 11)
//Middle - Splice(index, deletecount, new values)
numbers.splice(2, 0, 'a', 'b')
console.log(numbers)
//[ 10, 11, 'a', 'b', 1, 2, 4, 5 ]


//Find value in array primitive
numbers = [1, 2, 3, 1, 4, 5]
numbers.indexOf(1)
numbers.indexOf(1, 3)
numbers.lastIndexOf(1)
numbers.includes(2)

//NON-PRIMITIVE

let xObj = [{a:1, b: 2}]
//we need to use the find & findIndex,The memory difer for a and b or undefined
const s = xObj.find(function(x) {
 return x.a===1
})
console.log(s)
//Arrow function syntax
const t = xObj.find(x => x.b === 2)
console.log(t)


//Removing  element in the array
//End - pop
numbers.pop()
//Front - shift
numbers.shift()
//Middle - Splice(index, deletecount, new values)
numbers.splice(2, 3)
console.log(numbers)


//Empty the array
numbers = [1, 2, 3, 4]
numbers = [] //It not work for the multiple ref for the numnber array
numbers.length = 0 //Valid for all
numbers.slice(0, numbers.length)

//combining array
let a = [1,2,3],  b = [5,6,7] 
let c = a.concat(b)
c.splice(3, 4)
//Spread operator
c = [...a, 9, ...b, 8]

//Iterating Array
let numbers = [1, 2, 3, 4, 5]
for(let number of numbers)console.log(number)
numbers.forEach((number, index)=>console.log(index, number))


//Joining arrays
a=[1,2,3,4,5]
a.join(',') //1,2,3...
let msg = 'Create the javascript function'
let op = msg.split(' ')
op.join('-')//useful for the creating url slag

//sorting arrays
a=[27,2,31,44,5]
a.sort(); //2, 5, .....
a.reverse();//44, 31, ...
//Not applicable for array of obj

let courses = [{id:1, name: node.Js}, {id:2, name: react.js}]
//work with ascii table
courses.sort((a, b) =>{
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
})

//New Feature - Testing elements in the array 
//every() -  it will check valid criteria
//some() - atleast one case 
//return the boolean true or false
a = [1, 3, 4, 5, -6, -7]
op = a.every((value) => {
    return value >= 0
})

op = a.some((value) => {
    return value >= 0
})

//Filtering Array
a = [1, 3, -4, 5, -6, 7]
op = a.filter((value) => {
    return value >=0 
})
op = a.filter(n => n >= 0);
// [1, 3, 5,...]


//Mapping array - map each element in an array with something else
a = [1, 3, -4, 5, -6, 7]
a.map(n => '<li>'+ n +'</li>')
//Object
a.map(n => { return {value: n}})
// simplify remove return and curly brace for sigle value
a.map(n => ({value: n}))

//Chainable methods, two methods one by one 
a = [1, 3, -4, 5, -6, 7]
a.filter(n => n >= 0).map(n => ({ value : n}) );

//Reducing the array
a = [1, 3, 2]
// 0 is value of accumulator 2 argument, 1 is callback fns
a.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
}, 0)

