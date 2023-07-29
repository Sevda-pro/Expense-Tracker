// let b=<button id="deleteBtn" class="btn btn-danger">Delete</button>
let i=0;
submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    let info= Category.value
    localStorage.setItem(titlec,JSON.stringify([descc,info]))
    // console.log(e)
    
    todo.innerHTML  =  `<p>${todo.innerHTML}</p>    ${titlec} - ${descc} - ${info}
    <button type="submit" class="btn btn-danger deletetn">Delete</button>
    <button type="submit" class="btn btn-primary Editbtn">Edit</button>` 
       
    
    title.value = ""
    desc.value = ""
    i++;
  })
  deletetn.addEventListener("click",(e)=>{
    todo.remove()
   })
  
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.clear()
    todo.innerHTML = ""
  })
  delete_btn.addEventListener("click",(e)=>{
    e.preventDefault()

  })
  
 