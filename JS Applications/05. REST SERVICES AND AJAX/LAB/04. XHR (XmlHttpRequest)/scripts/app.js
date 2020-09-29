function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';
   let div = document.getElementById('res');
   console.log(` aaa`)
   let xmlHttpRequest = new XMLHttpRequest();
   xmlHttpRequest.addEventListener('readystatechange', function () {
      if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
         console.log(xmlHttpRequest.responseText);
         div.textContent = xmlHttpRequest.responseText;
      };
   }
   );
   xmlHttpRequest.open('GET', url);
   xmlHttpRequest.send();
}