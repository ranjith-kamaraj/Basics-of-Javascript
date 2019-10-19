let circle = {
    radius : 1,
    draw(){
        console.log('Drawing')
    }
};

//Cloning of Object
let another = {};
//M1:
// for(let key in circle)another[key] = circle[key];
//M2:
// another = Object.assign({length: 3}, circle)
//M3: spread operator
another = {...circle}
console.log(another);