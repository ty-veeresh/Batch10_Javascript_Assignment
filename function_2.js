function sum(a ,b){
    return a+b;
}

function avg(a ,b , add){
     console.log(add);
    if (typeof add == "function") {
        var resFrom  = add(100,200)
        console.log(resFrom); 
    }
  
    var res = sum(a,b);
    console.log(res/2); //15
}

avg(10,20 ,sum);

console.log(typeof avg);


console.log(" ------------ ");
function outFun(a , b) {
    var sum = a+b;
       function innerFun() {
            console.log(a);
            console.log(b);
           console.log(sum);
        }
        innerFun();
}

outFun(1,2);
var a;
console.log(a);
a = 10;



function getName() {
   var brand ;
   console.log(brand);
  brand = "ADDDD"
}

getName();