import { getPastProjects } from "./database.js"

const past_projects = getPastProjects()

export const PastProjects = () => {
    let html = "<ul>"

    for (const project of past_projects) {
        html += `<li id="project--${project.id}">${project.name}</li>`
        html += `<a href =${project.link}> Github Link </a>`
        html += `<br>`
        if ( (project.webpage).length >= 2) {
            html += `<a href =${project.webpage}> Website </a>`
        }

    }

    html += "</ul>"

    return html
}