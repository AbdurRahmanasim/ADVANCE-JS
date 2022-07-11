

// LEXICAL SCOPING 




// Parent cannot acces childs data
// But Child can access parents data



// function parent(){

// let a = "Hello"
// // console.log(a)


// function child(){
//   let b = "World"
//     console.log(b + a)

// }

// child()


// }


// parent()



// Ternary Operator 





// Template String

// let name = "manav" ;

// console.log(`Hello ${name}`)





// Ternary Operator



// let result = true ;
// if(result){
//     console.log("I am True")
// }
// else{
//     console.log("I am False")
// }


// SynTax of Ternary Operator


// (Condition) ?   True     :  false ;



// result ? console.log("True") : console.log("False") ;



// let result = true ;

// let num = 6



// result ? num === 5 ? console.log("True") : console.log("False") : console.log("False")






// =  (Assigning Operator)
// == (Value Check)
// === (Value and DataType Check)



// let name = "Abdur Rahman" ;



// let a = 5 ;

// let b = "5" ;



// if( a === b ){

// console.log("I am True")

// }
// else{

// console.log("I a False")

// }




// Array 




let animals  = ["Lion" , "Tiger" ]

// array brackets []

// index Number 

// index number always starts with 0

// console.log(animals[2])


// methods of array

// 1) Pop
// 2) Push
// 3) unshift
// 4) shift

// animals.pop()


// animals.push("Elephant")

// animals.unshift("Cat")

// animals.shift()



// Task to read these two methods of array

// splice 
// slice



// console.log(animals)



// OBJECT



// let obj = {

//   name : "Manav" ,
//   grade : "8th",
//   percentage : 93 

// }

// console.log(  obj.name   )





// let car = {

//     color : "Red",
//     number : 1234 ,
//     persons : 4

// }

// console.log(car.number)


// property = key + value

// key value pair


// let obj = {


//     name : "Abdur Rahman" ,
    
//     contactNumber : {

//     number1 : 123456 ,
//     number2 : 789 

//     }

// }


// console.log(obj.contactNumber.number2)





// DESTRUCTURING 

// 1) Destructuring of Array
// 2) Destructuring of Object



// old method 


// let arr = [ "Ali" , "Manav" ]

// let val1 = arr[0];

// let val2 = arr[1] ;


// console.log(val2)


// Destructuring of array 
// let [ val1 , val2  ] = arr ;


// console.log(val1)
// console.log(val2)






// let colors = [ "blue" , "red" , "yellow" , ["purple" , "orange"] ] ;


// let [val1 , val2 ,val3 , [val4 , val5]] = colors

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(val4)
// console.log(val5)



// destructuring OF OBJECT



// let colors = {


//  color1 : "red" ,

//  color2 : "yellow"


// }



// let { color2 } = colors



// console.log(color1)


// we can skip a value in destructuring of object

// console.log(color2)



// Data Types



// 1) Number
// 2) String
// 3) Null
// 4) Undefined
// 5) Boolean
// 6) Array
// 7) Object


// 8) Symbol
// 9) BigInt




// SYMBOL

// it is always unique

// let a = 10 ;
// let b = 10 ;


// let sym1 = Symbol("Manav")

// let sym2 = Symbol("Manav")

// console.log(  sym1 === sym2 )



// BIGINT  


// let num = 50 ;

// let numCheck = Number.MAX_SAFE_INTEGER ;

// console.log(numCheck)



// let bigInt = 10n ;

// to make a number BigInteger we have to write n in the last of the Number

// console.log( typeof(bigInt)   )



// array methods 


// 1) sort 



// let arr = [ 44  ,22 , 66 ]


// arr.sort()

// console.log(arr)


// 2) Filter



//  let arr = [ 1 , 2 ,3 ,4 ,5 ,6,7 ,8]



//  let filteredData = arr.filter(   (item) => {

//     return item == 5


//  } )

//  console.log(filteredData)


// 3) Map


// creates new array without changing the old



// let arr = [ 10 , 20 , 30 , 40  ]


// let mappedData = arr.map( (val)=>{

//     return  val - 1



// }


// )

// console.log(mappedData)



// variable Swap 



// let x = "Hello"

// let y = 20 ;




// [x , y] = [ y , x] ;



// console.log(y)

// power







// let  a = Math.pow(2 ,2)

// console.log(a)


let a  = 2 ** 2

console.log(a)








































