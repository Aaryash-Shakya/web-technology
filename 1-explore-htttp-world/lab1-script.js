const token = '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'

function callAPI(userName) {
    if (userName === 'Aaryash-Shakya') {
        document.querySelector('#authorizedData').style.display = 'flex'
    }
    else {
        document.querySelector('#authorizedData').style.display = 'none'
    }
    fetch(`https://api.github.com/users/${userName}`)
        .then(res => {
            if (res.status === 404) {
                console.log(res);
                return alert(`Error 404: Account not found`)
            }
            else if (res.status === 403) {
                console.log(res);
                return alert(`Error 403: API fetch limit reached`)
            }
            else if (res.ok) {
                console.log('API call successful');
                return res.json()
            }
        })
        .then(userData => {
            console.log(userData)
            document.querySelector('#resAvatarUrl').src = userData.avatar_url || 'https://identicons.github.com/jasonlong.png'
            document.querySelector('#resName').innerHTML = userData.name || userData.login
            document.querySelector('#resCreatedAt').innerHTML = userData.created_at.substring(0, 10)
            document.querySelector('#resLocation').innerHTML = userData.location || 'undefined'
            document.querySelector('#resBio').innerHTML = userData.bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti, deleniti quibusdam consequatur eaque quia autem totam ipsam natus ipsa qui.'
            document.querySelector('#resFollowers').innerHTML = userData.followers
            document.querySelector('#resFollowing').innerHTML = userData.following
            document.querySelector('#resPublicRepos').innerHTML = userData.public_repos
            document.querySelector('#resGithubUrl').href = userData.html_url
            document.querySelector('#resGithubUsername').innerHTML = userData.login
            // check if twitter account exists
            if (userData.twitter_username == null) {
                document.querySelector('#resTwitterUrl').style.display = 'none'
            }
            else{
                document.querySelector('#resTwitterUrl').style.display = 'inline'
            }
            document.querySelector('#resTwitterUrl').href = `https://twitter.com/${userData.twitter_username}`
            document.querySelector('#resTwitterUsername').innerHTML = userData.twitter_username || 'null'
        })
        .catch(err => console.log(err))
}

function selectData() {
    let name = document.querySelector('#userName').value
    callAPI(name)
}

function searchData() {
    let name = document.querySelector('#searchUserName').value
    callAPI(name)
}

function fetchPrivateRepo() {
    let privateRepo = 0
    fetch(`https://api.github.com/user/repos`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            console.log(res);
            if (res.status === 404) {
                console.log(res);
                return alert(`Error 404: Account not found`)
            }
            else if (res.status === 403) {
                console.log(res);
                return alert(`Error 403: API fetch limit reached`)
            }
            else if (res.ok) {
                console.log('Private repo fetch successful');
                return res.json();
            }
        })
        .then(repos => {
            repos.forEach(repo => {
                if (repo.private === true) {
                    privateRepo++
                }
            });
            document.querySelector('#authorizedData').innerHTML = `<h4>Private Repos: ${privateRepo}</h4>`
        })
        .catch(err => console.log(err))
}

// selectData()
