let blogContainer = document.querySelector('.blog-container')

let dummyDate = new Date()

// super function
function superChangeStatus(x) {
    if (x.status === "Publish") {
        x.status = "Archive"
    }
    else if (x.status === "Archive") {
        x.status = "Draft"
    }
    else if (x.status === "Draft") {
        x.status = "Publish"
    }
    start()
}
function superAddComment(x) {
    x.commentCount++
    start()
}
function superAddView(x) {
    x.viewCount++
    start()
}
let blogArray = [
    {
        title: "You Need This Hover Effect On Your Site ASAP",
        authorName: "Hyperplexed",
        addedDate: dummyDate,
        viewCount: 377,
        commentCount: 100,
        status: "Publish",
        imageUrl: "https://i.ytimg.com/vi/htGfnF1zN4g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5Cybcqqs_j2shlyK5ks1uj8Jv3g",
        refUrl: "https://youtu.be/htGfnF1zN4g?si=eEA_1eFHdq-N2HBs",
        changeStatus: function () {
            superChangeStatus(this)
        },
        addComment: function () {
            superAddComment(this)
        },
        addView: function () {
            superAddView(this)
        }
    },
    {
        title: "Mind-Blowing Anime.js Staggered Grid Effect",
        authorName: "Hyperplexed",
        addedDate: dummyDate,
        viewCount: 456,
        commentCount: 100,
        status: "Publish",
        imageUrl: "https://i.ytimg.com/vi/bAwEj_mSzOs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZk-KFrnIsjPz9deZtyx1dHDwOKg",
        refUrl: "https://youtu.be/bAwEj_mSzOs?si=Ijw91YE_PbJy5Ghk",
        changeStatus: function () {
            superChangeStatus(this)
        },
        addComment: function () {
            superAddComment(this)
        },
        addView: function () {
            superAddView(this)
        }
    },
    {
        title: "Unravelling the Magic behind Polyrhythms",
        authorName: "Hyperplexed",
        addedDate: dummyDate,
        viewCount: 159,
        commentCount: 70,
        status: "Publish",
        imageUrl: "https://i.ytimg.com/vi/Kt3DavtVGVE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyAJFjZELD-vk1n3d4rohdXMqc_Q",
        refUrl: "https://youtu.be/Kt3DavtVGVE?si=jJ_RuHGcnG9vxWZX",
        changeStatus: function () {
            superChangeStatus(this)
        },
        addComment: function () {
            superAddComment(this)
        },
        addView: function () {
            superAddView(this)
        }
    },
    {
        title: "21 Awesome Web Features you're not using yet",
        authorName: "Fireship",
        addedDate: dummyDate,
        viewCount: 860,
        commentCount: 501,
        status: "Publish",
        imageUrl: "https://i.ytimg.com/vi/q1fsBWLpYW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXo-3lI0nE-rVU85ia7Z06biFsJQ",
        refUrl: "https://youtu.be/q1fsBWLpYW4?si=kMZegjyldTNAl2jv",
        changeStatus: function () {
            superChangeStatus(this)
        },
        addComment: function () {
            superAddComment(this)
        },
        addView: function () {
            superAddView(this)
        }
    },
    {
        title: "It's time to talk about these Ul trends",
        authorName: "Juxtopposed",
        addedDate: dummyDate,
        viewCount: 310,
        commentCount: 120,
        status: "Publish",
        imageUrl: "https://i.ytimg.com/vi/TBOmUuG-9BY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFNdhu-M0rpsiVHh08anGem2W2rQ",
        refUrl: "https://youtu.be/TBOmUuG-9BY?si=jZes55gmacpzCY05",
        changeStatus: function () {
            superChangeStatus(this)
        },
        addComment: function () {
            superAddComment(this)
        },
        addView: function () {
            superAddView(this)
        }
    },
    {
        title: "Bun is disrupting JavaScript land",
        authorName: "Fireship",
        addedDate: dummyDate,
        viewCount: 817,
        commentCount: 700,
        status: "Publish",
        imageUrl: "https://i.ytimg.com/vi/dWqNgzZwVJQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyHGK2Rb64Uh_b92IDytHn8nIDvw",
        refUrl: "https://youtu.be/dWqNgzZwVJQ?si=4aemZAdPh7YFgpiD",
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
    blogArray.forEach((item) => {
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
                    <button class="button" onclick="blogArray[${index}].changeStatus()">Toggle:${item.status}</button>
                    <button class="button" onclick="blogArray[${index}].addComment()">Add Comment</button>
                    <button class="button" onclick="blogArray[${index}].addView()">Mark as Read</button>
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
