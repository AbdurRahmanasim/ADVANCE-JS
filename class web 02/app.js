
// JavaScript VAriable 



// ES5 ===> var 



// ES6 ===> let , const


// var str = "Hello World" 

// str = "Hello Class"   // ReAssign


// var str = "Hello Manav"  // Reclare and reassign  



// console.log(str)

// let a = 1 ;

// a = 2  //Reassign possible


// let a = 3 ;  // redeclare not possible

// console.log(a)


// const b = 70 ;



// console.log(b)




// var name = "Manav" ;

// name += "Kumar" ;

// console.log(name)



// Scope of variables



// FUnction


// types of scope 

// 1) Global Scope 
// 2) Local Scope 



// function sum(){
    
    // var  a = 4

    // let c = 80

    // const d = 90 

// }

// sum()

// console.log(c)

// console.log(d)







// if( true ){


    // var str = "Abdur Rahman"



    //  let str = "Abdur Rahman"


//     const p = "Good Night" ;




// }

// console.log(p)







// Types of Functions 


// 1) Regular Function

// 2) Fat arrow Function

// 3) Anonymous Function

// 4) Call back Function 

// 5) Constructor Function 



// Regular Function

// function sum( a ){


// console.log(a)


// }


// sum(5)


// Fat Arrow Function 



// const myFunc = (a , b) => {

//     console.log(a , b)



// }

// myFunc(10 , 20)



// const check = a => {

//     console.log(a)



// }

// check(10)







// Return keywod in function   





// function add(){

//  return "Good AfterNoon"

// }


// console.log(   add()  ) 





// we use return keyword when we want to get something from function


// learner

// explorer





// Anonymous Function 




// const foo =  function(){

// console.log("hello")

// }



// foo()









// const btn1 = () =>{

//     let btn = document.getElementById("redbg") 

//     btn.className = "red1"






// }






// STRICT MODE 


// "use strict"



// function foo(a , b , b ){


//     console.log( a , b , b )
// }

// foo( 2 , 3 , 4 )




// function foo(a , b , c ){


//     console.log( a , b , c )
// }

//  foo( 2 , 3 , 4 )






// Template String 




// let name = "MANAV KUMAR"


// ``    =====> Backsticks  



// console.log(` Hello ${name}  `)  // Concatenate 



// literal string =====> it is not assigned by any variable



// + ====> it doednot give any spaces

// , =====> it give one word space 


//  Ternary Operator

// let name = prompt("Enter Your Name" , "Enter Name" )



// console.log( "hello                    World" )





// Difference 


// 1) In Ternary we can call any variable but in string we cant 
// call any variable





// Hoisting  



// var str ; // we only declared a variable but did not assigned any value





// console.log(str)
// console.log(str1)
// console.log(str2)

// console.log(str3)
// console.log(str4)
// console.log(str5)
// console.log(str6)

// console.log(num)




// let str = "Manav Kumar"


// const num = 50 ; 


// var str1 = "Manav Kumar"
// var str2 = "Manav Kumar"
// var str3 = "Manav Kumar"
// var str4 = "Manav Kumar"
// var str5 = "Manav Kumar"
// var str6 = "Manav Kumar"







// LEXICAL SCOPING 




// parent can access childs data
// but child cannot access parent data 


function name(){

var a = "Hello World"

// console.log(a)


       function user(){

var b = "Good Morning"

console.log(a , b)

}
user()

}


name()










 
