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
<p>This project is currently in progress. More earnings call transcripts need to be parsed.</p>
<p>Once finish, a website will be built so that people can use to search, explore and analyze. </p>
<p>Please feel free to reach out if you have any suggestions or feedback. :)</p>

<h1>Past Projects</h1>
<article class="details">
    <section class="detail--column list details__projects">
        ${PastProjects()}
    </section>
</article>

<br>
<p>For more projects, please see the main GitHub page <a target="_blank" rel="noopener noreferrer" href = https://github.com/Tingting0618> https://github.com/Tingting0618 </a></p>
`

mainContainer.innerHTML = applicationHTML