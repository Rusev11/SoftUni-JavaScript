function solve() {

    function results() {

        return {
            add: (vec1, vec2) => {
                return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
            },
            multiply: (vec1, scalar) => {
                return [vec1[0] * scalar, vec1[1] * scalar];
            },
            length: (vec1) => {
                return Math.sqrt(vec1[0] ** 2 + vec1[1] ** 2);
            },
            dot: (vec1, vec2) => {
                return vec1[0]*vec2[0]+vec1[1]*vec2[1];
            },
            cross: (vec1, vec2) => {
                return vec1[0]*vec2[1]+vec1[1]*vec2[0];
            }

        }

    }
    let namespace =results();

  
    console.log(namespace.add([1, 1], [1, 0]));
    console.log(namespace.multiply([3.5, -2], 2));
    console.log(namespace.length(([3, -4])));
    console.log(namespace.dot([1, 0], [0, -1]));
    console.log(namespace.cross([3, 7], [1, 0]));

}


solve()
