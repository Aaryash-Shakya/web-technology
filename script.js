let projectContainer = document.querySelector('.project-container')

// project array
let projectArray = [
    {
        number: 1,
        imageUrl: "https://i.postimg.cc/nzLbcJQZ/wt-lab-1.png",
        title: "Explore HTTP World",
        description: "To get familiar with API, HTTP request and response to fetch github profile using username.",
        documentation: "https://docs.google.com/document/d/1ASxivGWqHFIoxQ5YgiF0r3POel3PZFX6jj1bqSC7cBY/edit#heading=h.n9riga8o68dv",
        demoUrl: "./1-explore-htttp-world/lab1-github-api-fetch.html",
    },
    {
        number: 2,
        imageUrl: "https://i.postimg.cc/T386jFBq/wt-lab-2.png",
        title: "Responsive Web Design - freeCodeCamp Certification",
        description: "To learn and implement basics of responsive web design and get 'Responsive Web Design' certification from freeCodeCamp.org.",
        documentation: "https://docs.google.com/document/d/1ASxivGWqHFIoxQ5YgiF0r3POel3PZFX6jj1bqSC7cBY/edit#heading=h.r1eqtumyqaho",
        demoUrl: "https://www.freecodecamp.org/certification/fcc68f23d5b-630e-4c16-b74f-a74685a59194/responsive-web-design",
    },
    {
        number: 3,
        imageUrl: "https://i.postimg.cc/nzLbcJQZ/wt-lab-1.png",
        title: "Getting Started with Bootstrap",
        description: "To learn to install and integrate Bootstrap into an existing project to make the project responsive.",
        documentation: "https://docs.google.com/document/d/1ASxivGWqHFIoxQ5YgiF0r3POel3PZFX6jj1bqSC7cBY/edit#heading=h.ukmc52v7j7mz",
        demoUrl: "./1-explore-htttp-world/lab1-github-api-fetch.html",
    },
    {
        number: 4,
        imageUrl: "https://i.postimg.cc/PrDGqKNL/wt-lab-4.png",
        title: "Working with JavaScript Objects",
        description: "To learn about JavaScript objects and map JavaScript objects with properties and methods into an HTML page..",
        documentation: "https://docs.google.com/document/d/1ASxivGWqHFIoxQ5YgiF0r3POel3PZFX6jj1bqSC7cBY/edit#heading=h.hgall85br5t7",
        demoUrl: "./4-javascript-object/lab4-js-object.html",
    },
]
// initially initialize export component with empty string
let exportComponent = ``
// loop for each array element
projectArray.forEach((item) => {
    // append html with template literal to end of exportComponent as string
    exportComponent += `
        <div class="col-lg-4 col-md-6">
            <div class="project-card card rounded-3">
                <div class="img-box">
                    <img src="${item.imageUrl}" alt="Image of the demo page">
                </div>
                <div class="detail-box p-md-4 p-2">
                    <h2 class="project-title text-uppercase">
                        Lab <span class="project-num">${item.number}</span>:
                        ${item.title}
                    </h2>
                    <p class="project-description">
                        ${item.description}
                    </p>
                    <div class="button-box">
                        <a href="${item.documentation}" target="_blank">
                            <div class="btn btn-outline-primary">
                                <i class="fa-solid fa-book"></i>
                                Documentation
                            </div>
                        </a>
                        <a href="${item.demoUrl}" target="_blank">
                            <div class="btn btn-primary">
                                <i class="fa-solid fa-play"></i>
                                Live Demo
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
})
// put the html string inside exportComponent as HTML inside projectContainer
projectContainer.innerHTML = exportComponent
