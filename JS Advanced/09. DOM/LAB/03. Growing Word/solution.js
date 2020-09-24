function growingWord() {
  let collor = ['blue', 'green', 'red'];
  let paragraph = document.getElementsByTagName('p')[2];
  let attribute = paragraph.getAttribute('style');
  console.log(attribute);
  if (attribute) {
    let attributeArray = attribute.split('; ');
    let color = attributeArray[0].slice(7);
    switch (color) {
      case 'blue':
        color = 'green';
        break;
      case 'green':
        color = 'red';
        break;
      case 'red':
        color = 'blue';
        break;
    }
    let fontSize = attributeArray[1].slice(11);
    fontSize = fontSize.slice(0, fontSize.length - 3);
    fontSize = Number(fontSize) + 2;
    paragraph.setAttribute('style', `color: ${color}; font-size: ${fontSize}px;`);
  } else {
    paragraph.setAttribute('style', 'color: blue; font-size: 2px;');
  }
}