let list = document.getElementById("todo")




function addTodo(){


    let todo_item = document.getElementById("todo_item") ;


    let li = document.createElement("li") ;
    let litext = document.createTextNode(todo_item.value) ;

    li.appendChild(litext)
    
    // let h1  = document.createElement("h1")
    
    // h1.setAttribute("class" , "todoText" )
    
    // h1.appendChild(litext)
    
    // li.appendChild(h1)


    let deletebtn = document.createElement("button")
    let delText = document.createTextNode("DELETE")
    deletebtn.setAttribute("onclick" , "deleteiem(this)")
    deletebtn.setAttribute("class" , "btn" )
    deletebtn.appendChild(delText)



    let editbtn = document.createElement("button")
    let editText = document.createTextNode("EDIT")
    editbtn.setAttribute("onclick" , "editItem(this)"  ) 
    editbtn.setAttribute("class" , "btn" )
    editbtn.appendChild(editText)
    
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    
    list.appendChild(li)

}

function deleteTodo(){

list.innerHTML = ""

}

function editItem(e){

    let editValue = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue)
    console.log(e)

    e.parentNode.firstChild.nodeValue = editValue
    
}
function deleteiem(e){

    e.parentNode.remove()

}