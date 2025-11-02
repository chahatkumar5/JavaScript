let score = "3abc";


//console.log(typeof score);
//console.log(typeof(score));

let num = Number(score);

//console.log(typeof num);
//console.log(num);

//conversions
//"33" => 33
//"33abc" => Nan Not a Number
// true => 1; false => 0

let isLoggedIn = 'Chahat';
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// '' => false  empty string converted to false
//'Chahat' => true non-empty string converted to true

let someNumber = 33;
let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);


//______________________________________________________Operations______________________________________________________

//console.log(1 + 2 + "3")
let x=5;
let y = ++x;

//console.log(x, y); Expected output = 6, 6

// let a=5;
// let b= a++;
//console.log(a, b); Expected output = 6, 5

//console.log(1 + 2 + 5 + "6" + "7" + 6 + 5)


//***************************************************ChatGPT Task**************************************************
//Task 1 

// let a = "10";
// let b = "20";

// a = Number(a);
// b = Number(b);
// console.log(a+b);

//Task 2
// let values = [0, 1, "", "hello", null, undefined, NaN, "false"];
// let booleanValues = values.map(item => Boolean(item))
// console.log(booleanValues)

// let trueBooleanValues = booleanValues.filter(item => item === false)
// console.log(trueBooleanValues)

//Task 3

// let input = '123.45px'
// numberInput = Number(input)
// console.log(numberInput) //output - NaN
// console.log(typeof numberInput)

//Task 4
// let isOnline = true;
// let isOffline = false;
// console.log(Number(isOnline));//1
// console.log(Number(isOffline));//0

//Task 5  Loose vs Strict Equality
let now = 5;
let later = '5';
console.log(now == later);//check only value not types
console.log(now === later);// checks both value and dataType


let expression = "25" - "5" + "10";
console.log(expression);
console.log(typeof expression);


let myResult = false + true ;
console.log(myResult)