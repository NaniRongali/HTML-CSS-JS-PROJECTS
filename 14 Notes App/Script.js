const notesContainer = document.querySelector(".notes-container")
const btn = document.querySelector(".button")
let notes = document.querySelectorAll(".input-box")
function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStoarage(){
  localStorage.setItem("notes",notesContainer.innerHTML);
}

btn.addEventListener("click",()=>{
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable","true");
  img.src="images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
})


notesContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStoarage();
  }
  else if(e.target.tagName === "p"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onKeyup = function(){
        updateStoarage();
      }
    })


  }
})

document.addEventListener("keydown",event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})
