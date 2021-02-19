const inquirer = require("inquirer");
// const jest = require("jest");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");
const fs = require("fs")

const employee = []

function promptManager(){
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the manager id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the manager email?',
    }, 
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager office number?',
    }, 
  ]).then((reponse)=>{
    employee.push( new Manager(reponse.name, reponse.id, reponse.email, reponse.officeNumber))

    promptNewEmployee()
     
  })

}

promptManager();

function promptEngineer(){
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your engineer?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineer id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineer email?',
    }, 
    {
      type: 'input',
      name: 'username',
      message: 'What is the engineer Github username?',
    }, 
     
  ]).then((reponse)=>{
    employee.push( new Engineer(reponse.name, reponse.id, reponse.email, reponse.username));

    promptNewEmployee();
  })
}

function promptIntern(){
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your intern?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the intern id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the intern email?',
    }, 
    {
      type: 'input',
      name: 'school',
      message: 'What school did your intern go?',
    }, 
     
  ]).then((reponse)=>{
    employee.push( new Intern(reponse.name, reponse.id, reponse.email, reponse.school))

    promptNewEmployee()
  })
}

function promptNewEmployee(){
inquirer.prompt([
   {
      type: 'list',
      name: 'type',
      message: 'Which new employee would you like to add?',
      choices: [
      "Engineer", 
      "Intern", 
      "Finished",
       ]
    },
    
  ]).then((reponse)=>{
   if(reponse.type == "Engineer"){
       promptEngineer();

   }else if(reponse.type == "Intern"){
       promptIntern();
   }else{
       console.log(employee);
       return;
   }

  })
}

// function printInfo(){
// fs.writeFile('index.html', , function (err) {
//   if (err) return console.log(err);
 
// });
// }
// printInfo();