function first() {
    setTimeout(()=>{
        console.log(" started "); 
        console.log("first function"); 
    } , 3000)
}

function second() {
    setTimeout(()=>{
        console.log("second function");
        console.log("ended ");
    } , 5000)
}

first()
second()