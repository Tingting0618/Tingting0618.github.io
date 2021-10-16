import { PastProjects } from "./PastProjects.js"
import { CurrentProjects } from "./CurrentProjects.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header class="header">
    <img src="./image/logo1.gif" alt="Letter Logo"/>
    <h1>Welcome to Tingting's Portfolio Page <i class="fas fa-laptop-code"></i> </h1>
</header>

<br>

<h2>Her Past Projects <i class="fas fa-mug-hot"></i></h2> 

<article class="details">
    <section class="detail--column list details__projects">
        ${PastProjects()}
    </section>
</article>

<br>
<h2>Her In Progress Project <i class="fas fa-mug-hot"></i></h2>
<article class="details">
    <section class="detail--column list details__projects">
        ${CurrentProjects()}
    </section>
</article>
<br>
<p style="text-align:center">For more projects, please check out her  <a target="_blank" rel="noopener noreferrer" href = https://github.com/Tingting0618>GitHub</a> page.</p>

`

mainContainer.innerHTML = applicationHTML