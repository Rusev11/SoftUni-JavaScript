function vol() {
    return this.x * this.y * this.z;
};

function area() {
    return this.x * this.y;
};




function solve(area, vol, input) {
    let objects = JSON.parse(input);
    for (let i=0; i<objects.length; i++){
        let areaCur = Math.abs(area.call(objects[i]));
        let volumeCur = Math.abs(vol.call(objects[i]));
        objects[i] = { area: areaCur, volume: volumeCur};
    }
    return  objects;
}


solve('[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},    {"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]')