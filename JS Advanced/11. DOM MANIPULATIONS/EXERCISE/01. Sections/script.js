function create(words) {
   function unhide(e) {
      let par = e.target.firstChild;
      par.removeAttribute('style');
   }

   let mainDiv = document.getElementById('content');


   for (let i = 0; i < words.length; i++) {
      let currentDiv = document.createElement('div');
      let currentP = document.createElement('p');
      currentP.textContent = words[i];
      currentP.setAttribute('style','display:none');
      currentDiv.addEventListener('click', unhide);
      mainDiv.appendChild(currentDiv);
      currentDiv.appendChild(currentP);
   }
}