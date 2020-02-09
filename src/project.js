const ProjectFactory = (title, description) => {
    return {
        title, 
        description, 
        tasks: []
    }; 
}

export {ProjectFactory};