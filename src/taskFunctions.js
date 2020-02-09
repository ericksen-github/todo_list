import { projectsArray } from "./localStorage";
import {TaskFactory} from "./task.js"; 
import {removeButtonFunctions} from "./removeTaskButton.js"; 

const taskFunctions = (() => {
    let currentProjectDOM; 

    const addNewTask = () => {
        const currentProjectTitle = currentProjectDOM.childNodes[0]. // is location of title text of
        childNodes[0].innerHTML;                                     // project in DOM of current container

        const taskName = document.getElementById("nameTaskTextBox").value;
        const taskDescription = document.getElementById("descriptionTaskTextBox").value;
        const taskDate = document.getElementById("taskDate").value; 
        const taskPriority = document.getElementById("taskPriority").value; 
        const newTask = TaskFactory(taskName, taskDescription, taskDate, taskPriority);
        let indexOfProject; 

        for (let i = 0; i < projectsArray.length; i++) {
            if (projectsArray[i].title == currentProjectTitle){
                indexOfProject = i; 
            }
        }
 
        projectsArray[indexOfProject].tasks.push(newTask)
        createTable(); 
        createNewTaskDOM(projectsArray[indexOfProject].tasks); 
    }

    const createNewTaskDOM = (project) => {
        let taskHTML = ""; 

        const tbodyOfCurrent = currentProjectDOM.childNodes[1].childNodes[0].childNodes[3]; 

        for (let task of project) {

            taskHTML += `<tr><td>${task.name}</td>
                            <td>${task.description}</td>
                            <td>${task.dueDate}</td>
                            <td class = "priorityColumn">${task.priority}</td>
                            <td class = "editColumn"><div class = "editButton">Edit</div></td>
                            <td class = "removeOuter"><div class = "removeButton">Remove</div></td>
                        </tr>
                    `;
        }
        tbodyOfCurrent.innerHTML = taskHTML; 
        removeButtonFunctions.createRemoveListeners(currentProjectDOM.childNodes[0].childNodes[0].innerHTML); 
    }
        
    const createTable = () => {
        const tableChecker = currentProjectDOM.childNodes[1];

        if (tableChecker){
            return; 
        }
 
        let tableHTML = ""; 
        const tableContainer = document.createElement("div"); 
    
        tableHTML += `<table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Priority</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    `;
    
        tableContainer.innerHTML = tableHTML; 
        currentProjectDOM.appendChild(tableContainer); 
    }

    const createNewTaskForm = (e) => {
        currentProjectDOM = e.target.parentNode.childNodes[0]; 

        document.getElementById("overlay").style.display = "block"; 
        
        const container = document.createElement("div"); 
        container.id = "taskFormContainer"; 
        
        const formTitle = document.createElement("div"); 
        formTitle.id = "taskFormTitle"; 
        formTitle.innerHTML = "New Task";

        const nameTitle = document.createElement("div"); 
        nameTitle.classList = "formTaskSubtitle"; 
        nameTitle.innerHTML = "Task Name"; 

        const nameTextBox = document.createElement("input")
        nameTextBox.setAttribute("type", "text"); 
        nameTextBox.placeholder = "Type take name here...";
        nameTextBox.classList = "formTextBox"; 
        nameTextBox.id = "nameTaskTextBox"; 

        const descriptionTitle = document.createElement("div"); 
        descriptionTitle.classList = "formTaskSubtitle"; 
        descriptionTitle.innerHTML = "Description"; 

        const descriptionTextBox = document.createElement("input")
        descriptionTextBox.setAttribute("type", "text"); 
        descriptionTextBox.placeholder = "Type description here (optional)";
        descriptionTextBox.classList = "formTextBox"; 
        descriptionTextBox.id = "descriptionTaskTextBox"; 

        const datePrioTitleContainer = document.createElement("div"); 
        datePrioTitleContainer.id = "datePrioTitleContainer"; 

        const datePrioItemContainer = document.createElement("div"); 
        datePrioItemContainer.id = "datePrioItemContainer"; 

        const taskDateTitle = document.createElement("div"); 
        taskDateTitle.classList = "formTaskSubtitle"; 
        taskDateTitle.id = "taskDateTitle"; 
        taskDateTitle.innerHTML = "Due Date"; 

        const taskDate = document.createElement("input");
        taskDate.setAttribute("type", "date"); 
        taskDate.id = "taskDate"; 

        const taskPriorityTitle = document.createElement("div"); 
        taskPriorityTitle.classList = "formTaskSubtitle"; 
        taskPriorityTitle.id = "taskPriorityTitle"; 
        taskPriorityTitle.innerHTML = "Priority"; 

        const taskPriority = document.createElement("select"); 
        const optionsArray = ["High", "Medium", "Low"]; 
        taskPriority.id = "taskPriority"; 
        for (let i = 0; i < optionsArray.length; i++) {
            let option = document.createElement("option"); 
            option.value = optionsArray[i]; 
            option.text = optionsArray[i]; 
            taskPriority.appendChild(option); 
        }

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "buttonTaskContainer";

        const submitButton = document.createElement("div"); 
        submitButton.classList = "formButton"; 
        submitButton.id = "submitTaskButton"; 
        submitButton.innerHTML = "Submit"; 
        submitButton.addEventListener("click", inputTaskChecker); 

        const cancelButton = document.createElement("div"); 
        cancelButton.classList = "formButton"; 
        cancelButton.id = "cancelTaskButton"; 
        cancelButton.innerHTML = "Cancel";
        cancelButton.addEventListener("click", removeForm);
     
        buttonContainer.appendChild(submitButton); 
        buttonContainer.appendChild(cancelButton); 

        container.appendChild(formTitle); 
        container.appendChild(nameTitle); 
        container.appendChild(nameTextBox); 
        container.appendChild(descriptionTitle); 
        container.appendChild(descriptionTextBox); 
        datePrioTitleContainer.appendChild(taskDateTitle); 
        datePrioTitleContainer.appendChild(taskPriorityTitle); 
        container.appendChild(datePrioTitleContainer); 
        datePrioItemContainer.appendChild(taskDate); 
        datePrioItemContainer.appendChild(taskPriority); 
        container.appendChild(datePrioItemContainer); 
        container.appendChild(buttonContainer); 
        document.getElementById("mainContainer").appendChild(container); 
    }

    const removeForm = () => {
        document.getElementById("taskFormContainer").remove(); 
        document.getElementById("overlay").style.display = "none"; 
    }

    const inputTaskChecker = () => {
        const nameText = document.getElementById("nameTaskTextBox"); 

        if (nameText.value == "") {
            nameText.classList.add("textBoxError");
            nameText.placeholder = "Field cannot be empty...";
            return; 
        } else {
            addNewTask();  
            removeForm(); 
        }
    }
return {
     createNewTaskForm
    };
  })();

  export { taskFunctions }
