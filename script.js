let projectContainer = document.querySelector('.project-container')

// project array
let projectArray = [
    {
        number: 1,
        imageUrl: "https://i.ytimg.com/vi/htGfnF1zN4g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5Cybcqqs_j2shlyK5ks1uj8Jv3g",
        title: "Explore HTTP World",
        description: "",
        demoUrl: "./1-explore-http-world/lab1-github-api-fetch.html",

        addedDate: dummyDate,
        viewCount: 377,
        commentCount: 100,
        status: "Publish",
        changeStatus: function () {
            superChangeStatus(this)
        },
        addComment: function () {
            superAddComment(this)
        },
        addView: function () {
            superAddView(this)
        }
    }
]
function start() {
    // initially initialize export component with empty string
    let exportComponent = ``
    // current index in the array initialize to 0
    let index = 0
    // loop for each array element
    projectArray.forEach((item) => {
        // append html with template literal to end of exportComponent as string
        exportComponent += `
        <div class="col-md-6 p-4">
            <div class="blog-box" id="index-${index}">
                <h3>${item.title}</h3>
                <div class="inner-container">
                    <div class="left">
                        <a href="${item.refUrl}" target="_blank" class="image-box">
                            <img src="${item.imageUrl}" alt="demo image">
                        </a>
                        </div>
                        <div class="right data-box">
                        <p>
                            <strong>By:</strong> ${item.authorName}
                        </p>
                        <p>
                            <strong>Added at:</strong> ${item.addedDate.getFullYear()}-${item.addedDate.getMonth()}-${item.addedDate.getDate()}
                        </p>
                        <p>
                            <strong>Reads:</strong> ${item.viewCount}
                        </p>
                        <p>
                            <strong>Comments:</strong> ${item.commentCount}
                        </p>
                        <p>
                            <strong>Status:</strong> ${item.status}
                        </p>
                    </div>
                </div>
                <div class="button-box">
                    <button class="button" onclick="projectArray[${index}].changeStatus()">Toggle:${item.status}</button>
                    <button class="button" onclick="projectArray[${index}].addComment()">Add Comment</button>
                    <button class="button" onclick="projectArray[${index}].addView()">Mark as Read</button>
                </div>
            </div>
        </div>
        `
        // increment index for next object in array
        index++
    })
    // put the html string inside exportComponent as HTML inside blogContainer
    blogContainer.innerHTML = exportComponent
}

start()
