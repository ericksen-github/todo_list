import { formFunctions } from "./inputForm.js"
import { localStorageFunctions } from "./localStorage.js"


formFunctions.createForm(); 
document.getElementById("createNewProject").addEventListener("click", formFunctions.showForm); 

if (localStorageFunctions.storageAvailable("localStorage")) {
    localStorageFunctions.populateStorage(); 
}



