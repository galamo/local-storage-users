function init(){
  
  if(localStorage.getItem("currentUser") != null){
      var userObj = JSON.parse(localStorage.getItem("currentUser"));
      console.log(userObj);
  }
}

init();

function saveUser(){

var userName = document.getElementById("userName").value;
var about = document.getElementById("about").value;
var job = document.getElementById("job").value;
var school = document.getElementById("school").value;

// localStorage.setItem("userName",userName.value);
// localStorage.setItem("about",about.value);
// localStorage.setItem("job",job.value);
// localStorage.setItem("school",school.value);
var user = new User(userName,about,job,school);

localStorage.setItem("currentUser",JSON.stringify(user));

}

function User(_name,_about,_job,_school){
  this.Name = _name;
  this.About = _about;
  this.Job = _job;
  this.School = _school;
}
