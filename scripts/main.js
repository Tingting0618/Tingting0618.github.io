import { PastProjects } from "./PastProjects.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header class="header">
    <img src="./image/logo1.png" alt="Letter Logo"/>
    <h1>Welcome to the Code & Data Project Page</h1>
</header>

<h1>Past Projects</h1>
<article class="details">
    <section class="detail--column list details__projects">
        ${PastProjects()}
    </section>
</article>

<br>
This site is in progress...
`

mainContainer.innerHTML = applicationHTML