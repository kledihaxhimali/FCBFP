const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form.signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

// first we’ll declare variables for the HTML elements we’ll be working with:

const noteForm = document.getElementById("validation-form-signUp");
const noteFname = document.getElementById("fname");
const noteLname = document.getElementById("lname");
const noteEmail = document.getElementById("email");
const notePass = document.getElementById("password");
const notes = document.getElementById("notes");

let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];
const user ={
  fullname: "Kledi Haxhimali",
  emaili:"kledi.haxhimali@gmail.com",
  password:"12345"
}
window.localStorage.setItem('user',JSON.stringify(notesStorage));

let data1= window.localStorage.getItem('user')
console.log(data1);



//   save a new note when the form is submitted

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  notesStorage.push(noteFname.value);  
  notesStorage.push(noteLname.value);
  notesStorage.push(noteEmail.value);
  notesStorage.push(notePass.value);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  listBuilder(noteFname.value);
  listBuilder(noteLname.value);
  listBuilder(noteEmail.value);
  listBuilder(notePass.value);
  noteFname.value = "";
  noteLname.value = "";
  noteEmail.value = "";
  notePass.value = "";
});

//   pushes the new note into into the notesStorage then updates the notes in the localStorage

const listBuilder = (text, password) => {
  const note = document.createElement("li");
  note.innerHTML = text + password+ '<button onclick="deleteNote(this)">x</button>';
  notes.appendChild(note);
};

//   we need to loop through each of the notes in localStorage when the page is loaded and re-render them

// const getNotes = JSON.parse(localStorage.getItem("notes"));
// getNotes.forEach((note) => {
//   listBuilder(note);
// });

// we need to do is add the functionality for the delete button:

const deleteNote = (btn) => {
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indexOf(el);
  notesStorage.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  el.remove();
};

function clearData(){
  localStorage.clear();
  noteForm= "";
  window.close();
}

/////////////////////////////////////////////////////////////////////


// sign up

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
  // Retrieving the values of form elements 
  let fname = document.signup.fname.value;
  let lname = document.signup.lname.value;
  let email = document.signup.email.value;
  let password = document.signup.password.value;

  let fnameErr = lnameErr = emailErr = password = true;

  if (fname == "") {
    printError("fnameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fname) === false) {
      printError("fnameErr", "Please enter a valid name");
    } else {
      printError("fnameErr", "");
      fnameErr = false;
    }
  }

  if (lname == "") {
    printError("lnameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lname) === false) {
      printError("lnameErr", "Please enter a valid name");
    } else {
      printError("lnameErr", "");
      lnameErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (password == "") {
    printError("passErr", "Please enter a password")
  } else if (password.length < 8) {
    printError("passErr", "Password length must be atleast 8 characters")
  } else if (password.length > 15) {
    printError("passErr", "Password length must not exceed 15 characters")
  } else {
    printError("passErr", "");
    passErr = false;
  }

  if ((fnameErr || lnameErr || emailErr || passErr) == true) {
    return false;
  } else {
    var dataPreview = "You've entered the following details: \n" +
      "First Name: " + fname + "\n" +
      "Last Name: " + lname + "\n" +
      "Email Address: " + email + "\n" +
      "Password: " + password + "\n"

    alert(dataPreview);
  }
};