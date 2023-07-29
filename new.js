let title = document.getElementById("title");
let desc = document.getElementById("desc");
let todo = document.getElementById("todo");

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    let info = Category.value
    localStorage.setItem(titlec, JSON.stringify([descc, info]))

    let newEle = document.createElement("p");
    newEle.innerHTML = ` <p>${titlec} - ${descc} - ${info}  <button type="submit" class="btn btn-danger deletetn">Delete</button>       <a class="btn btn-primary" href="#" role="button">Edit</a> </p>`;
    todo.appendChild(newEle);
    titlec = "";
    descc = "";
    newEle.querySelector("button").addEventListener("click", (e) => {
        newEle.remove()
    });
    newEle.querySelector("a").addEventListener("click", (e) => {
        confirm("Do you want to change the expense?")
        if(confirm)
        {
            let val1=prompt('write the value of expense')
            let val2=prompt(`write the Description`)
            titlec=val1
            descc=val2
            info=Category.value
            localStorage.setItem(titlec, JSON.stringify([descc, info]))
            newEle.innerHTML = ` <p>${titlec} - ${descc} - ${info} <button type="submit" class="btn btn-danger deletetn">Delete</button>       <a class="btn btn-primary" href="#" role="button">Edit</a> </p>`
        }  
    });
deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.clear()
    newEle.innerHTML = ""
  })
})

