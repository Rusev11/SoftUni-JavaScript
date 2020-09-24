function solve() {
  let getText = document.getElementById('input');
  let text = getText.textContent;

  let textArray = text.split('.');
  let outputElement = document.getElementById('output');
  let currentParArray = [];
  let paragraph = 0;
  for (let i = 0; i < textArray.length; i += 3) {
    currentParArray[paragraph] = document.createElement('p');
    for (let j = i; j < i + 3; j++) {
      currentParArray[paragraph].textContent += textArray[j] + '.';
    }
    outputElement.appendChild(currentParArray[paragraph]);
    paragraph++;
  }
}