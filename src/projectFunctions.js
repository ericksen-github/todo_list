import {ProjectFactory, projectsArray} from "./project.js"
import {taskFunctions} from "./taskFunctions.js"
import { sub } from "date-fns";

const projectFunctions = (() => {
    
    const addProject = () => {
        const nameText = document.getElementById("nameTextBox").value;
        const descText = document.getElementById("descriptionTextBox").value;
        createNewProjectListDiv(nameText); 
        createNewProjectTaskDOM(nameText); 

        const newProject = ProjectFactory(nameText, descText); 
        projectsArray.push(newProject); 
    }

    const createNewProjectListDiv = (nameText) => {
        const container = document.getElementById("listedProjects"); 
        const newDiv = document.createElement("div"); 
        newDiv.classList = "projectsOnList"; 
        newDiv.innerHTML = nameText; 
        container.appendChild(newDiv);
    }

    const createNewProjectTaskDOM = (nameText) => {
        const container = document.getElementById("projectsContainer"); 

        const projectsContainer = document.createElement("div"); 
        projectsContainer.classList.add("projectsTaskContainer"); 
        container.appendChild(projectsContainer); 

        const projectTitleContainer = document.createElement("div"); 
        const projectTitle = document.createElement("div"); 
        projectTitleContainer.classList.add("projectTitleContainer"); 
        projectTitle.classList.add("projectTitles");
        projectTitle.innerHTML = nameText;
        projectTitleContainer.appendChild(projectTitle); 
        projectsContainer.appendChild(projectTitleContainer); 
        
        const projectTasksContainer = document.createElement("div"); 
        projectsContainer.appendChild(projectTasksContainer); 

        const createNewTaskButton = document.createElement("div"); 
        createNewTaskButton.classList.add("createNewTaskButton"); 
        createNewTaskButton.innerHTML = "+ create a new task"; 
        createNewTaskButton.addEventListener("click", taskFunctions.createNewTaskForm); 
        projectsContainer.appendChild(createNewTaskButton); 

    }

    return {
     addProject
    };
  })();

  export { projectFunctions }
