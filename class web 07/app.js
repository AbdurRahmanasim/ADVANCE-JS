// local storage is the storage of web browser

// data cannot be expired
// we have to delete the data 

// if we close the website the will remain save


// It only stores String Data

// local Storage takes data in key value pair




// let obj = {
 
//     name1 : "Abdur Rahman" ,

//     name2 : "Manav" 

// }





// localStorage.setItem( "Database" , JSON.stringify(obj) )









// let data = {

//   age : 16 ,
//   arr : [ "ali" , 'Hasan' ]

// }



// localStorage.setItem( "Data" , JSON.stringify(data)    )










// const singup = () =>{


//   let email = document.getElementById("email").value
//   let name = document.getElementById("name").value
//   let password = document.getElementById("password").value


//   let obj = {

//     email : email ,
//     name : name ,
//     password : password

//   }


//   console.log(obj)


// localStorage.setItem("SignUpData" , JSON.stringify(obj))



// let key = JSON.parse(localStorage.getItem("SignUpData"))   


// if( !key ){

// localStorage.setItem("SignUpData" , JSON.stringify([obj]))

// window.location.assign("login.html")
    


// } else{

// let changedData = [...key , obj]

// localStorage.setItem("SignUpData" , JSON.stringify(changedData))

// window.location.assign("login.html")



// }



// }





// const login = () => {

//  let loginEmail = document.getElementById("email1").value
//  let loginPassword = document.getElementById("password1").value




//  let getData = JSON.parse(localStorage.getItem("SignUpData")) 


//  for(let i of getData){



//     if(i.email === loginEmail && i.password === loginPassword ){

//         window.location.assign("home.html")



//     }



//  }









// }









// fetch is used to read or send data 


// text  , JSON



// fetch("url / path ")
// .then( change into text or json)
// .then ( data )
// .catch ( error)






// fetch("content/readme.txt")
// .then(
//     (res) => res.text() 

// )
// .then(
//     (data) => console.log(data)
// )
// .catch(
//     (error) => {
//         console.log("Can't  fetch data")
//     }
// )






// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data[1].name))

//   .catch(

//     (error)=>{
//         console.log("Cant Fetch Data")
//     }
//   )










// class are templates to create object 



class Student {


constructor( studentName , studentAge , studentStatus ){

    this.name = studentName 
    this.age = studentAge
    this.status = studentStatus
}

favoriteStudent(){

    return `${this.name} is my favorite Student`

}

static add(a , b){

return a + b ;

}



}

let student = new Student("Manav" , 13 , "Good")

console.log(student)
console.log(student.favoriteStudent())
console.log(Student.add(8 , 9))




class School extends Student {


    constructor( studentName , studentAge , studentStatus , studentLanguage ){

 
     super(studentName , studentAge , studentStatus )
     this.language = studentLanguage 


    }


}

let school = new School("Ali" , 25 , "Average" , "English")

console.log(school.favoriteStudent())













