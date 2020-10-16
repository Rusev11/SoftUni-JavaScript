const Cube = require('./cubeModel');
const {saveCube} = require('../controllers/database');

let newCube1 = new Cube('Gan356 Air SM', '','https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg', 3);
let newCube2 = new Cube('Eco-Dark', '','https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg', 6);
let newCube3 = new Cube('Pyraminx', '','https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg', 1);
let newCube4 = new Cube('Megaminx', '','https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg', 3);

// saveCube(newCube1);
// saveCube(newCube2);
// saveCube(newCube3);
// saveCube(newCube4);
