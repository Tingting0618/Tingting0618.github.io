import { PastProjects } from "./PastProjects.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header class="header">
    <img src="./image/logo1.png" alt="Letter Logo"/>
    <h1>Welcome to Tingting Duan Portfolio Page</h1>
</header>

<h1>Past Projects</h1>
<article class="details">
    <section class="detail--column list details__projects">
        ${PastProjects()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML