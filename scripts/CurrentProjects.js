import { getCurrentProjects } from "./database.js"

const current_projects = getCurrentProjects()

export const CurrentProjects = () => {
    let html = "<ul>"

    for (const project of current_projects) {
        html += `<li id="project--${project.id}"><i class="fas fa-code"></i> ${project.name}</li>`
        html += `<a target="_blank" rel="noopener noreferrer" href =${project.link}> <i class="fab fa-github"> </i> <div>Source Code </div> </a>`
        if ( (project.webpage).length >= 2) {
            html += `<a target="_blank"  rel="noopener noreferrer" href =${project.webpage}><i class="fab fa-r-project"></i><div>Website</div>  </a>`
        }
    }

    html += "</ul>"

    return html
}