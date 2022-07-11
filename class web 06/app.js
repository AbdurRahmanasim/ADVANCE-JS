
// import name from "./home.js"




// console.log(name)




// Spread Operator 


// let arr = [ 5 , 6]


// console.log(...arr)


// let arr2 = [ 1 , 2 , 3 , 4 , ...arr  ]

// console.log(arr2)





// QUiZ APP







let quizQuestions = [

{

    question : "Which City is the Capital of pakistan ?" ,
    options : [
        "islamabad",
        "karachi" ,
        "multan" ,
        "rawalpindi" ,
    ] ,

    answer : "islamabad"
},
{

    question : "how many digits are there in pi ?" ,
    options : [
        "200",
        "700" ,
        "infity" ,
        "None of the Above" ,
    ] ,

    answer : "infity"
},
{

    question : "what is the capital of USA ?" ,

    options : [
        "washington",
        "newyork" ,
        "california" ,
        "los angeles" ,
    ] ,

    answer : "washington"
}

]





function showques(e){


let ques = document.getElementById("ques") ;


ques.innerHTML = `Q${ e + 1 } )` + " " + quizQuestions[e].question ;

let options = document.getElementsByClassName("option") 

for(let i = 0 ; i < options.length ; i++){

  
    options[i].innerHTML = quizQuestions[e].options[i]



}

}



let count = 0 ;

let score = 0 ;


function next(){

 let radios = document.getElementsByClassName("radiobtn") ;

 calc() 

 if( count < quizQuestions.length - 1 ){
  

    for(let i = 0 ; i < radios.length ; i++ ){


        if(radios[i].checked == true ){

       count++
       showques(count)

       radios[i].checked = false
       
    }    
 }

}
else{

   alert(" score ====> " + score)

}
}



function calc(){


    let radios = document.getElementsByClassName("radiobtn") ;

    let options = document.getElementsByClassName("option")


for(let i = 0 ; i < radios.length ; i++){


if(radios[i].checked == true  ){

if(options[i].innerHTML == quizQuestions[count].answer ){

    score++
}
}
}
}



































