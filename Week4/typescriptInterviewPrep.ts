//Example with "?"

function greet(name?:string){

console.log("Hello"+(name ? name :"Guest"))

// # //Internally:
// #   // if(name){
// #    Hello Ravi
// #    }
// #    else(){
// #    Hello Guest
// #    }
}
greet("Ravi")
greet()

//Example with "!"

let username : string | number ="Ravi"
console.log(username!.toUpperCase()); // Compiler allows it because of "!"


//Example for unknown datatype.

 let value : unknown;
value = 43;
value="Hello"
if (typeof value == "string"){
console.log(value.toUpperCase());
}

