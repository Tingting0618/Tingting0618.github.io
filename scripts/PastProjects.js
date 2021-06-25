import { getPastProjects } from "./database.js"

const past_projects = getPastProjects()

export const PastProjects = () => {
    let html = "<ul>"

    for (const project of past_projects) {
        html += `<li id="project--${project.id}">${project.name}</li>`
        html += `<a target="_blank" rel="noopener noreferrer" href =${project.link}> Github Project Page </a>`
        html += `<br>`
        if ( (project.webpage).length >= 2) {
            html += `<a target="_blank"  rel="noopener noreferrer" href =${project.webpage}> Website </a>`
        }

    }

    html += "</ul>"

    return html
}