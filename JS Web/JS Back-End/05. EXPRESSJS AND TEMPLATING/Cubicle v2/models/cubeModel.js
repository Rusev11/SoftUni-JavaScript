const {v4}= require('uuid');

class Cube {
    constructor(name, description, imageURL, difficulty){
        this.id = v4(),
        this.name = name || 'Name missing',
        this. description = description || 'Description missing',
        this.imageURL = imageURL || 'URL missing',
        this.difficulty = difficulty || 0
    }
}

module.exports = Cube;