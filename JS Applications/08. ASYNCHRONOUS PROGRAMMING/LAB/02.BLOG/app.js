function attachEvents() {
    function loadPosts() {
        console.log(selectMenu.getElementsByTagName('option'));

        while (selectMenu.hasChildNodes()) {
            selectMenu.removeChild(selectMenu.lastChild);
        }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                for (let key in data) {
                    let title = data[key].title;
                    let option = document.createElement('option');
                    selectMenu.appendChild(option);
                    option.textContent = title;
                    option.value = key;
                }
            })
    }

    function viewPost(e) {
        
        let currentId = selectMenu.value;
        let postTitle = document.getElementById('post-title');
        let postBody = document.getElementById('post-body');
        let postComments = document.getElementById('post-comments');
        let currentUrl = `https://blog-apps-c12bf.firebaseio.com/posts/${currentId}.json`;
        
        while (postComments.hasChildNodes()) {
            postComments.removeChild(postComments.lastChild);
        }

        fetch(currentUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                postTitle.textContent = data.title;
                postBody.textContent = data.body;
                let comments = data.comments;
                comments.forEach(item =>{
                    let li = document.createElement('li');
                    postComments.appendChild(li);
                    li.textContent = item.text;
                });
                console.log(comments);
            })
    }

    const url = 'https://blog-apps-c12bf.firebaseio.com/posts.json';
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPosts = document.getElementById('btnViewPost');
    let selectMenu = document.getElementById('posts');
    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPosts.addEventListener('click', viewPost);

}

attachEvents();
