

// const Fname = "  Ravi ";
// const trimmedName = Fname.trim() //
// console.log(trimmedName);


// let URL = "https://testleaf.com/?id=23234767461/"
// let arr=URL.split("?");

// console.log(arr);//[https://testleaf.com],[id=23234767461/]

// arr[1]= arr[1].replace("/",""); //id=23234767461

// let id = arr[1].replace("id=","");//23234767461

// console.log(id);


const displayPrice = "Rs 1,00,000"
const expectedPrice = "100000"

const cleanedPrice = displayPrice.replaceAll("Rs","").replaceAll(",","");

console.log(cleanedPrice);

//expect((cleanedPrice).toBe(expectedPrice)) --> assertions --> true


//== loose eqaulity
//=== strcit equality

'5'==5;// true ('5' of datatype string is coerced to number datatype 5)
'5'===5;// false (number!=boolean)


const Originalurl = "http://leaftaps.com/opentaps/control/login";

//replace "login" with "main"

const expectedUrl = Originalurl.replace("login","main");

console.log(expectedUrl);
