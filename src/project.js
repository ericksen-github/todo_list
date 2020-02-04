const ProjectFactory = (title, description) => {
    return {
        title, 
        description, 
        tasks: []
    }; 
}

let projectsArray = []; 


export {ProjectFactory, projectsArray};