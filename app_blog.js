//!Selectors
const todoInput = document.querySelector(".blog-title");
const description = document.querySelector(".blog-description");
const markdown = document.querySelector(".blog-markdown");





const blogsubmit=document.querySelector('.blog-submit')
const todoList = document.querySelector(".todo-list");
const rmbutton= document.querySelector('.delete-post')



blogsubmit.addEventListener('click', submitme)

rmbutton.addEventListener('click', deleteCheck)




function submitme(event) {

    if(todoInput.value === ' '){
        alert("Are you serious? C'mon man ")
    } else {
        event.preventDefault();
        const card = document.createElement("div");
        card.classList.add("card");
      
        const cardbody = document.createElement("div");
        cardbody.classList.add("card-body");
      
      
      
        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerHTML = todoInput.value;
        cardbody.appendChild(h5);
      
        const h6 = document.createElement("h6");
      //   h6.classList.add("card-subtitle");
        h6.className='card-text mb-2 text-muted'
        h6.innerHTML = description.value;
        cardbody.appendChild(h6);
      
        const p= document.createElement("p");
        p.classList.add("card-text");
        p.innerHTML = markdown.value;
        cardbody.appendChild(p);
      
        const btn= document.createElement('button')
      //   btn.classList.add('btn')
        btn.className='delete-post btn btn-lg btn-danger'
        btn.innerHTML="delete"
        btn.addEventListener('click', deletenew)
        cardbody.appendChild(btn)
      
      
      
      
        card.appendChild(cardbody)
      //last thing
        todoList.appendChild(card)
    }
 
}


function deleteCheck(e){
    const item = e.target
    
    const todo= item.parentElement.parentElement
    todo.remove()

        // var div = this.parentElement;
        //     div.style.display = "none";
    
}

function deletenew(e){
    const item= e.target
    const todo= item.parentElement.parentElement
    todo.remove()
}
