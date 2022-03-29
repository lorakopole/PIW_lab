"use strict"

const CheckTask = (name) =>
{
    const task = document.getElementById(name);
    const dateOfClick = document.createElement("h6");
    dateOfClick.innerHTML = Date();
    if(task != null)
    {
    if(task.style.textDecoration != "line-through")
    {
        task.style.textDecoration = "line-through"
        task.style.color = "grey";
        dateOfClick.style = ".date-style";
        task.appendChild(dateOfClick);
        ;
    }
    else
    {
        task.style.textDecoration = "none";
        task.style.color = "black";
        task.removeChild(task.lastChild);
        
    }
    }
}

let counter=0;
const makeTask = () =>
{
    const taskName = String(document.getElementById("taskname").value); 
    if(taskName === "") {
        $("#errorMessage").toggle("slow");

        $("#errorMessage").click((event) => {
            $("#errorMessage").toggle();
            console.log({event});
        })
        return;
    }
    const listOfTasks = document.getElementById("TaskList");

    const newTask = document.createElement("li");
    newTask.id = String(counter);
    counter = counter + 1;
    newTask.innerHTML = `${taskName}`;
    $(function(){
            var r= $('<input type="button" value="X" class="btn btn-danger" onclick="removeTask(this)"/>');
            $(newTask).append(r);
        });
    newTask.onclick = () =>
    {
        CheckTask(newTask.id);
    };

    listOfTasks.append(newTask);

    const TaskField = document.getElementById("taskname");
    TaskField.value = "";
}
var trash = "";
var trashList = "";

const removeTask = (object) =>
{
    $(object).closest("li").remove();
}