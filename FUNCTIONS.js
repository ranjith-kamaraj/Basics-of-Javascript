//Function Declaration 
function walk(){
    console.log('walk')
}
//Anonymous Fuction Expression
let run =  function(){
    console.log('run')
};

//Named Fuction Expression
let run =  function namedRun(){
    console.log('run')
};
//Function is object
let move = run
run()
move()
//Same output

//Hoisting - It is the process of moving fuctions declaration to the top of the file.It is done automatically
//javascript engine when execute this code
walk();//Possible
function walk(){
    console.log('walk')
}
run();//Not possible
//Anonymous Fuction Expression
let run =  function(){
    console.log('run')
};

//Arguments - feature for get arguments
function test(parameters) {}
test(arguments)

function run(){
    let total =0;
    for(let value of arguments){
        total += value;
        return total
    }
}
run(1, 2, 3, 4, 5)// output is 10



