let menue = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS"- Display All Tasks
"NEW"- Add A New Task
"REMOVE"- Remove A Task
"CLOSE"- Close The Task Manager

`



let userInput = prompt(`${menue}`);
if (userInput == `TASKS`){
    userInput = alert(`Charge MacBook\nMaster JavaScript`)
} if(userInput == `CLOSE`) {
    userInput = alert(`Thank you for using Task Manager!`)
} else {
    while (userInput !== `CLOSE `){
        userInput = prompt(menue)
    };

}



  


