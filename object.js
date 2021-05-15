var person={
    uname:"sachin",
    Age:22,
    heigth:"5.10f",
    gender:"male",
    hobbies:["playing","roaming","watching tv"],
    address :{
        houseno:24,
        street:"RR nagar",
        city:"blr",
    },
    eating:function()
    {
        console.log(this.uname + "is playing");

 
},
sleeping:function()
{
    console.log(this.uname + "is watching tv");
},
};

console.log(person);
console.log(person.name);
console.log(person["age"]);