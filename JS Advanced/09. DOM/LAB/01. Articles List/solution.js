function createArticle() {
	let newTitle = document.getElementById('createTitle');
	let newContent = document.getElementById('createContent');
	let newArticle = document.createElement('article');
	let newArticleHead = document.createElement('h3');
	let newArticleContent = document.createElement('p');
	newArticleHead.textContent = newTitle.value;
	newArticleContent.textContent = newContent.value;
	newArticle.appendChild(newArticleHead);
	newArticle.appendChild(newArticleContent);
	let section = document.getElementById('articles');
	if (newTitle.value && newContent.value) {
		section.appendChild(newArticle);
	}
	newTitle.value = '';
	newContent.value = '';
}