console.log("named function");
function getData(a, b) {
    console.log(a);
    console.log(b);
    console.log("inside the named function");
    return a + b;
}
var res = getData(10, 20);


console.log("function expression");

var greeting = function (name) {
    console.log(name);
    console.log("good aftrenoon");
    return "bye"
}

console.log(greeting);
var resp = greeting("kavya");

console.log("imdetiley invoke function");// function executed when web page render
(function (name) {
    console.log(name);
    console.log("abaca");
})("kavvya");

console.log("arrow function");
var x = (name, age) => {
    console.log("arrow function");
}
x("abc", 22)

var y = name => {
    console.log("one variable we can remove braces");
}