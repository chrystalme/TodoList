
function displayTask(task,i, projectArray) {
    let card = document.createElement("div")
    let cardBody = document.createElement("div")
    let h5 = document.createElement("h5")
    let h6 = document.createElement("h6")
    let p = document.createElement("p")
    let buttonPriority = document.createElement("button")
    let buttonDestroy = document.createElement("button")
    h5.innerHTML = task.name
    h6.innerHTML = task.date
    p.innerHTML = task.description
    card.id = `card-${i}`
    card.classList.add("card")
    card.style.width = "18rem"
    cardBody.classList.add("card-body")
    h5.classList.add("card-title")
    h6.classList.add("card-subtitle", "mb-2", "text-muted")
    p.classList.add("card-text")
    buttonPriority.addEventListener("click", () => {
        card.classList.toggle("bg-warning")
        task.priority = true
        console.log(task)
    })
    buttonPriority.classList.add("btn","btn-warning")
    buttonDestroy.classList.add("btn", "btn-danger")
    buttonPriority.innerHTML = "Priority"
    buttonDestroy.innerHTML = "Delete"
    buttonDestroy.addEventListener("click", () => {
        console.log(i)
        document.getElementById(`card-${i}`).remove()
        projectArray.splice(i,1)
    })
    cardBody.appendChild(h5)
    cardBody.appendChild(h6)
    cardBody.appendChild(p)
    cardBody.appendChild(buttonPriority)
    cardBody.appendChild(buttonDestroy)
    card.appendChild(cardBody)
    return card
}

export default displayTask;