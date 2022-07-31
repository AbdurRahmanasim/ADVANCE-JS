


// let p1 = document.getElementById("p1")
// let p2 = document.getElementById("p2")
// let p3 = document.getElementById("p3")

// let parkings = [ p1 , p2 , p3  ]





// function park(){
    
// let flag = false

//     for(let i = 0 ; i < parkings.length ; i++){

//         if(parkings[i].innerHTML === "Available" ){


//             let txt = prompt("Enter Your Car Number")

//             parkings[i].innerHTML = txt
//             flag = true

//             break


//         }
  
//     }

//     if( flag === false   ){

//         alert("No space Available")
//     }


// }


// function checkout(){



//     let carNumber =  prompt("Enter Car Number")

//     let flag = false


//     for(let key of parkings){


//         if(key.innerHTML === carNumber ){

//             key.innerHTML = "Available"

//             flag = true

//             break;
//         }


//     }

//     if(flag === false){

//         alert("No car is availale with this Number")

//     }






// }
















// STOPWATCH 





// let hr = 00 ;
// let min = 00 ;
// let sec = 00 ;
// let msec = 00 ;


// let hrHead = document.getElementById("hr")
// let minHead = document.getElementById("min")
// let secHead = document.getElementById("sec")
// let msecHead = document.getElementById("msec")
// let interval ;





// function timer(){

//     msec++
//     msecHead.innerHTML = msec ;


//     if(msec >= 99){
//         sec++
//         secHead.innerHTML = sec;
//         msec = 00 ;
//     }
//   else  if(sec >= 60){
//         min++
//         minHead.innerHTML = min;
//         sec = 00 ;
//     }
//     else if(min >= 60){
//         hr++
//         hrHead.innerHTML = hr;
//         min = 00 ;
//     }

// }

// function start(){


//     interval = setInterval( timer , 10)

//     let btn = document.getElementById("start-btn")
//     btn.style.visibility = "hidden"

// }

// function stop(){


//     clearInterval(interval)


//     let btn = document.getElementById("start-btn")
//     btn.style.visibility = "visible"


// }

// function reset(){

    
//     hr = "00" ;
//     min = "00" ;
//     sec = "00" ;
//     msec = "00" ;


//     hrHead.innerHTML = hr ;
//     minHead.innerHTML = min ;
//     secHead.innerHTML = sec ;
//     msecHead.innerHTML = msec ;

//     stop()
//     let btn = document.getElementById("start-btn")
//     btn.style.visibility = "visible"

// }









// GITHUB USER SEARCHER










// function search(){

//     let userName = document.getElementById("gitSearch").value

// let url = "https://api.github.com/users/" + userName
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {

// console.log(data)
//         let ip = document.getElementById("ip")

//         ip.innerHTML = `
        
//         <img src=${data.avatar_url}>
        
//         `


       

//     })

//     .catch(err => {console.log(err)})

// }









// LOGOUT

let obj = {

name : "manav",
age : 13,

    
}




localStorage.setItem("loginData" , JSON.stringify(obj) )



function remove(){

localStorage.removeItem("loginData")


}