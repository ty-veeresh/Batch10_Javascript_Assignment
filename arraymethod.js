
console.log("slice method");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

console.log("sliceing with delete element");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

console.log("concation method");
var watch = ["fastrack", "levon"];
var price = [7000, 500, 300];
var arr = watch.concat(price);
console.log(arr);

var includes = fruits.includes("Banana", 0);
console.log(includes);

console.log("pushing element");
fruits.push("grapes");
console.log(fruits);

console.log("poping element");
var b = fruits.pop();
console.log(b);
console.log(fruits);

console.log("strat and end index slice");
var arr1 = fruits.slice(2, 4);
console.log(arr1);
console.log(fruits);


var marks = [50, 40, 45, 37, 20];

function check(value) {
    return value > 30;
}

console.log((marks.filter(check)));

var num = fruits.indexOf("kiwi", 1)
console.log(num);






console.log("join using separator");
var arr2 = fruits.join("a");
console.log(arr2);