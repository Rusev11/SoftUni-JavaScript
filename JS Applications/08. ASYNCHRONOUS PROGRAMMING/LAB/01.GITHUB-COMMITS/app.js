function loadCommits() {
    let usernameEl = document.getElementById('username');
    let repoEl = document.getElementById('repo');
    let username = usernameEl.value;
    let repo = repoEl.value;
    let url = `https://api.github.com/repos/${username}/${repo}/commits+`
    let ul = document.getElementById('commits');
    fetch(url)
        .then(res => {
            if (res.status >= 400) {
                throw res;
            };    
            res.json();
        })
        .then(data => {
            ul.textContent = '';
            data.forEach(item => {
                let li = document.createElement('li');
                li.textContent = `${item.commit.author.name}: ${item.commit.message}`
                ul.appendChild(li);
                console.log(item.commit.author.name);
            })

        })
        .catch(error => {
            ul.textContent = '';
            let li = document.createElement('li');
            li.textContent = `Error: ${error.status} (${error.statusText})`;
            ul.appendChild(li);
        });
}