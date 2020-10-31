//!Selectors
const todoInput= document.querySelector('.todo-input')
const todoButton= document.querySelector('.todo-button')
const todoList= document.querySelector('.todo-list')







//. Event Listeners

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)



//! Functions
function addTodo(event){
    if(todoInput.value === ''){
        alert('Please input something!!!')
    } else {
        event.preventDefault()
        const todoDiv= document.createElement('div')
        todoDiv.classList.add('todo')
        const newTodo= document.createElement('li')
        newTodo.innerText= todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)

            //Completed Button || Check mark
    const completedButton= document.createElement('button')
    completedButton.innerHTML= '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

     //Remove Button || 
     const removeButton= document.createElement('button')
     removeButton.innerHTML= '<i class="fas fa-trash"></i>'
     removeButton.classList.add('trash-btn')
     todoDiv.appendChild(removeButton)

     // Add div to UL  APPEND to list !
     todoList.appendChild(todoDiv)

     //Clear todo input
     todoInput.value=""
    
    }

}


function deleteCheck(e){
    console.log(e.target)
    const item = e.target

    //Delete

    if(item.classList[0] === "trash-btn"){
        const todo= item.parentElement
        todo.remove()
    }

    //CHECK 

    if(item.classList[0]=== "complete-btn"){
        const todo= item.parentElement
        todo.classList.toggle('completed')
    }
}