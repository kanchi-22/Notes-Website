console.log("Welcome to project1.js");
showNotes();
// localStorage.clear();

// If the user adds a note, we update the local storage-->

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function(){
    let userInput = document.getElementById("addNote");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(userInput.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    userInput.value = "";
    showNotes();
})

let searchBtn = document.getElementById("searchBtn");
let searchSpace = document.getElementById("searchSpace");
// console.log(searchBtn);
searchBtn.addEventListener('click',function(){
    showSpecificNotes(searchSpace.value);
    searchSpace.value = "";
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function(element, index){
        html += `<div class="newNote" id="newNote">
        <h3>Note ${index + 1}</h3>
        <p>${element}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="dltBtn">Delete Note</button>
    </div>`
    })
    let notesElm = document.getElementById("savedNotes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = "<p>No notes added.</p>";
    }
}

function deleteNote(index){
    // console.log("I am deleting",index);
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

function showSpecificNotes(key){
    // console.log(key);
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html ="";
    let l = notesObj.length;
    // console.log(l);
    let count = 0;
    notesObj.forEach(function(element, index){
        // console.log(element);
        if(element.includes(key)){
            html += `<div class="newNote" id="newNote">
            <h3>Note ${index + 1}</h3>
            <p>${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="dltBtn">Delete Note</button>
            </div>`;
        }
        else{
            // html = `<p>No notes containing "${key}"`;
            count++;
        } 
        
        if(count == l){
            html = `<p>No notes containing "${key}"`;
            // html += `<button class="newBtn" id="newBtn" onclick="showNotes">Show all notes</button>`;
        }
    })
    html += `<button id="newBtn" onclick="showNotes()" class="newBtn">Show all notes</button>`;
    let notesElm = document.getElementById("savedNotes");
    // if(notesObj.length != 0){
    //     notesElm.innerHTML = html;
    // }
    // else{
    //     notesElm.innerHTML = "<p>No notes added.</p>";
    // }
    notesElm.innerHTML = html;
    // let newBtn = document.createElement("button");
    // let btnHtml = `<button class="newBtn" id="newBtn">Show all notes</button>`;
    // newBtn.innerHTML = btnHtml;
    // newBtn.addEventListener('click',showNotes());

}


