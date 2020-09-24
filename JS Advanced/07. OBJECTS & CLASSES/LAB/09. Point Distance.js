function solve(input) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        static distance (a, b) {
            let distX = a.x - b.x;
            let distY = a.y - b.y;
            return Math.sqrt(distX ** 2 + distY ** 2);
        }

    }
    let p1 = new Point(5, 5);
    let p2 = new Point(9, 8);
    console.log(Point.distance(p1, p2));

}
solve()