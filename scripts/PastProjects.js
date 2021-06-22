import { getPastProjects } from "./database.js"

const past_projects = getPastProjects()

export const PastProjects = () => {
    let html = "<ul>"

    for (const project of past_projects) {
        html += `<li id="project--${project.id}">${project.name}</li>`
        html += `<a href =${project.link}> Github Link </a>`
        html += `<br>`
        html += `<a href =${project.webpage}> Actual Webpage </a>`
    }

    html += "</ul>"

    return html
}