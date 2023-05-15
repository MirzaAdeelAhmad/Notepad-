
//    ------------------ Step 1 ------------------
var button = document.getElementById("add");

//    ------------------ Step 3 ------------------
const onclickfunction = (text = "") =>{
    var note = document.createElement("div");
    note.classList.add("note");
    // console.log(note);

    var htmlData = `  <div class="note-area">
    <button class="note-delete-button"><i class="fa-solid fa-trash note-delete-icon"></i></button>
    <button class="note-add-button"><i class="fa-solid fa-pen-to-square note-add-icon"></i></button>
   </div>
   <div class="back-text ${text ? "" : "hidden"}"></div>
   <textarea class="text-area ${text ? "hidden" : ""}"></textarea> `;

   note.insertAdjacentHTML("afterbegin", htmlData);
   document.body.appendChild(note);

//    ----------------------  getting the refrences ---------------------
   var deletenote = note.querySelector(".note-delete-button");
   var addnote = note.querySelector(".note-add-button");
   var backtxt = note.querySelector(".back-text");
   var fronttext = note.querySelector(".text-area");


//    ------------------ step 4  Deleting the Note Area ------------------
   deletenote.addEventListener('click', () => {
   note.remove();
}) 

//    --------------------- step 5 Adding The text ----------------------
    fronttext.value = text;
    backtxt.innerHTML = text;
   
    addnote.addEventListener("click", () =>{
    backtxt.classList.toggle("hidden");
    fronttext.classList.toggle("hidden");

   })

   fronttext.addEventListener("change", (event) =>{
    var value = event.target.value;
    backtxt.innerHTML = value;
    localStorageData();
   })

   

}

//    ------------------- Push Data to Local Storage --------------------
const localStorageData = () =>{  
    var textareaData = document.querySelectorAll("textarea");
    const notess = [];
    textareaData.forEach((note) =>{
        return notess.push(note.value);
        
    })
    localStorage.setItem(notess, JSON.stringify(notess)); 
}

var notess = JSON.parse(localStorage.getItem("notess"));
if(notess){ notess.forEach( (note) => onclickfunction(note))};

//    ------------------ Step 2 ------------------
button.addEventListener("click", () =>{
    onclickfunction();
})






