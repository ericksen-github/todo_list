import { projectsArray } from "./project";

const removeButtonFunctions = (() => {

    const createRemoveListeners = (projectTitle) => {
        document.querySelectorAll(".removeButton").forEach((button) => {
            button.addEventListener("click", () => {
                removeTask(button.parentElement.parentElement, projectTitle); // passes same row as remove button
            })
        })
    }

    const removeTask = (selectedRow, projectTitle) => {
        const taskName = selectedRow.children[0].innerHTML;
        const table = selectedRow.parentElement.parentElement;  // gets name of task on row
        table.deleteRow(selectedRow.rowIndex);                  // removes row from table
        let currentProject; 

        for (let i = 0; i < projectsArray.length; i++) {             // finds task name in projectsArray
            if (projectsArray[i].title == projectTitle) {   
                currentProject = projectsArray[i]; 
                console.log(currentProject); 
            }
        }

        for (let j = 0; j < currentProject.tasks.length; j++) {
            if (currentProject.tasks[j].name == taskName) {
                currentProject.tasks.splice(j, 1);    // and splices out task
                console.log(currentProject); 
            }
        }     
    }

    return {
        createRemoveListeners
       };
     })();
   
     export { removeButtonFunctions }
   