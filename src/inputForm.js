import { projectFunctions } from "./projectFunctions.js"

const formFunctions = (() => {
    
    // creates form at start up and hides, only showing when create new project clicked
    const createForm = () => {
        const container = document.createElement("div"); 
        container.id = "formContainer"; 
        
        const formTitle = document.createElement("div"); 
        formTitle.id = "formTitle"; 
        formTitle.innerHTML = "New Project";

        const nameTitle = document.createElement("div"); 
        nameTitle.classList = "formSubtitle"; 
        nameTitle.innerHTML = "Project Name"; 

        const nameTextBox = document.createElement("input")
        nameTextBox.setAttribute("type", "text"); 
        nameTextBox.placeholder = "Type project name here...";
        nameTextBox.classList = "formTextBox"; 
        nameTextBox.id = "nameTextBox"; 

        const descriptionTitle = document.createElement("div"); 
        descriptionTitle.classList = "formSubtitle"; 
        descriptionTitle.innerHTML = "Description"; 

        const descriptionTextBox = document.createElement("input")
        descriptionTextBox.setAttribute("type", "text"); 
        descriptionTextBox.placeholder = "Type description here (optional)";
        descriptionTextBox.classList = "formTextBox"; 
        descriptionTextBox.id = "descriptionTextBox"; 

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "buttonContainer";

        const submitButton = document.createElement("div"); 
        submitButton.classList = "formButton"; 
        submitButton.id = "submitButton"; 
        submitButton.innerHTML = "Submit"; 
        submitButton.addEventListener("click", inputChecker); 

        const cancelButton = document.createElement("div"); 
        cancelButton.classList = "formButton"; 
        cancelButton.id = "cancelButton"; 
        cancelButton.innerHTML = "Cancel";
        cancelButton.addEventListener("click", hideForm); 

        buttonContainer.appendChild(submitButton); 
        buttonContainer.appendChild(cancelButton); 

        container.appendChild(formTitle); 
        container.appendChild(nameTitle); 
        container.appendChild(nameTextBox); 
        container.appendChild(descriptionTitle); 
        container.appendChild(descriptionTextBox); 
        container.appendChild(buttonContainer); 
        document.getElementById("mainContainer").appendChild(container); 
    }

    const showForm = () => {
        const formContainer = document.getElementById("formContainer"); 
        formContainer.style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }

    const hideForm = () => {
        const nameTextBox = document.getElementById("nameTextBox");
        nameTextBox.value = ""; 
        nameTextBox.placeholder = "Type project name here...";
        nameTextBox.classList.remove("textBoxError"); 

        document.getElementById("formContainer").style.display = "none"; 
        document.getElementById("overlay").style.display = "none"; 
        document.getElementById("descriptionTextBox").value = ""; 
    }

    const inputChecker = () => {
        const nameText = document.getElementById("nameTextBox"); 

        if (nameText.value == "") {
            nameText.classList.add("textBoxError");
            nameText.placeholder = "Field cannot be empty...";
            return; 
        } else {
            projectFunctions.addProject(); 
            hideForm(); 
        }
    }

    return {
     createForm, showForm
    };
  })();

  export {formFunctions}