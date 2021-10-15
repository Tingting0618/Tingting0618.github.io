import { PastProjects } from "./PastProjects.js"
import { CurrentProjects } from "./CurrentProjects.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header class="header">
    <img src="./image/logo1.gif" alt="Letter Logo"/>
    <h1>Welcome to Tingting's Portfolio Page</h1>
</header>

<br>
<h2>Her past projects</h2>
<article class="details">
    <section class="detail--column list details__projects">
        ${PastProjects()}
    </section>
</article>

<br>
<h2>Her in progress project</h2>
<article class="details">
    <section class="detail--column list details__projects">
        ${CurrentProjects()}
    </section>
</article>
<br>
<p>For more projects, please visit the main GitHub page <a target="_blank" rel="noopener noreferrer" href = https://github.com/Tingting0618> https://github.com/Tingting0618 </a></p>

`

mainContainer.innerHTML = applicationHTML