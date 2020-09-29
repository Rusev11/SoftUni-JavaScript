let list = document.getElementById('repos');
let username = document.getElementById('username').value;
let url = `https://api.github.com/users/${username}/repos`

function loadRepos() {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			data.forEach(item => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.href = item.html_url;
				a.textContent = item.full_name;
				li.appendChild(a);
				list.appendChild(li);
			}
			)

		})
}