
// METHOD 01 : NAME MODULE IMPORT.
// import {add,user} from "./math.js"; 
// METHOD 02: DEFAULT MODULE IMPORT.
import message from "./message.js";
 // const user = {
      //  name: "priyantha",
       // email: "priya2@gmail.com",
    //  };
     // console.log(user); 

    //  console.log(message("priyantha",29));

    
    
     // console.log("Add 1 + 3 = ", add(1,3));
     // console.log(add(1,3)); THIS FUNCTION IS A GLOBAL FUNCTION M RESION IS FUCTION NOT COVER IN {}
   
     
// ** FOR ALL MODULE AND FUNCITON INFORT.
// import * as math from "./math.js";

// ** WE CANN'T DEFINE VARIABLES USING JAVASCRIPT KEYWORDS.
// const break = "Break";
// console.log(break);

// ** SYMBOL **
const myuniqueID = Symbol("discription for myunique ID");
const anotheruniqueID = Symbol("discrip for anotheruniqueId");
console.log(myuniqueID,anotheruniqueID);
console.log(myuniqueID==anotheruniqueID); // output : false (even with the same description, symbols are unique.)

const userIdsymbol = Symbol("user ID");
const user = {
     name : "priya",
     age  : 29,
     [userIdsymbol] : 12345, // using the symbol as a computed property key
};
console.log(user.name);
console.log(user[userIdsymbol]);
    