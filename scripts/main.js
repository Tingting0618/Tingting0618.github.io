import { PastProjects } from "./PastProjects.js"
import { CurrentProjects } from "./CurrentProjects.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header class="header">
    <img src="./image/logo1.png" alt="Letter Logo"/>
    <h1>Welcome to Tingting Duan Portfolio Page</h1>
</header>

<h1>In Progress Project</h1>
<article class="details">
    <section class="detail--column list details__projects">
        ${CurrentProjects()}
    </section>
</article>
<p>Please see the Github link for more details about this project. </p>
<p>Please feel free to reach out if you have any suggestions or feedback.</p>

<h1>Past Projects</h1>
<article class="details">
    <section class="detail--column list details__projects">
        ${PastProjects()}
    </section>
</article>

<br>
<p>This site is in progress...</p>
`

mainContainer.innerHTML = applicationHTML