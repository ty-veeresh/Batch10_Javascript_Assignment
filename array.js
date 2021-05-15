var fruits=["apple","mango"];
fruits[4]=["kiwi"];
fruits[5]=10;// any data type
fruits[6]="";// can have empty, 
fruits["seasonal"]="grapes"; // without index,key value
console.log(fruits);
var isarray=array.isarray(fruits)
console.log(isarray);// to check array 

for(var i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log(fruits["seasonal"]);
console.log(typeof fruits);

if(typeof(fruits)=="object")// not a way to check array
{
    console.log(true);
}
else{
    console.log(true);
}



fruits.push("pappaya","abc",);// to add at last, return updated index
console.log(fruits);
fruits.unshift("mavi", "orange"); // append at the first
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);


var game=new game("cricket");
console.log(game);