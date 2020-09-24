function solve(input) {
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        get diameter() {
            return this.radius*2;
        }
        get area() {
            return Math.pow(this.radius,2)*Math.PI;
        }
        set diameter (diam) {
            this.radius = diam/2;
        }
    }
    let obj = new Circle(2);
    console.log(`Radius: ${obj.diameter}`);
    console.log(`Diameter: ${obj.diameter}`);
    console.log(`Area: ${obj.area}`);
    obj.diameter = 1.6;
    console.log(`Radius: ${obj.diameter}`);
    console.log(`Diameter: ${obj.diameter}`);
    console.log(`Area: ${obj.area}`);

}
solve()