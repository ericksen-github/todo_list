import { compareAsc, format } from 'date-fns'
import { formFunctions } from "./inputForm.js"
import { taskFunctions } from "./taskFunctions.js"

formFunctions.createForm(); 
document.getElementById("createNewProject").addEventListener("click", formFunctions.showForm); 



