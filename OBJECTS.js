//Factory Fucntion
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Drawing");
    }
  };
}
const c1 = console.log(createRect(2))
const c2 = console.log(createRect(2))

//Costructor function (PASCAL -OneTwoThree)
function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('Drawing')
    }
    // return this;
}

// new - 1.will create the empty obj{}, 2.this is assign the value to this obj, 
// 3.It will return the whole obj like return this
const circle = new Circle(1)
console.log(circle)


//Dynamic Obj
const circle = {
  radius:1
}
circle.a = '7878'
circle.draw = function(){}
delete circle;
console.log(circle)

//Every object have the constructor property that was the refresnce the function that was used to create that object


//Fuctions are Objects
// Fuction have blue colour have props, pink is funs\
const circle = new Circle(1)
//same as
Circle.call({}, 1)
Circle.call(window, 1)
Circle.apply({}, [1, 2, 3, 4])

//Value(Primitive) - Primitives are copied by their values(Number, string, null, undefined, )
//Reference(Non-Primitive)  - Copied by thir refernce(memory)(Arrys, fun, obj)

//Enumerating of props
let circle = {
  radius : 1,
  draw(){
      console.log('Drawing')
  }
};
for(let key in circle) console.log(key, circle[key]);//print key and props

//TypeError: circle is not iterable(of) only applicable for array
for(let key of circle) console.log(key);
//Now it applicable
for(let key of Object.keys(circle)) console.log(key);
for(let entry of Object.entries(circle)) console.log(entry);
if('radius' in circle)console.log('Yes')
if('test' in circle)console.log('No')

//Cloning of Object
let another = {};
//M1:
// for(let key in circle)another[key] = circle[key];
//M2:
// another = Object.assign({length: 3}, circle)
//M3: spread operator
another = {...circle}
console.log(another);

//Garbage collector - its automatically run in backGround, it will deallocates the unused variables memory

//String Primitive
const name = 'Ronaldo';
//String Obj -  it will access the alll in built funcs assign to string
const last  = new String('Test')
//Need to study - InbuiltFuncs(Math, etc...) and Escape Notation

//Template Literals - BackTick(``), also pass the ${Placeholder- pass the expression}


