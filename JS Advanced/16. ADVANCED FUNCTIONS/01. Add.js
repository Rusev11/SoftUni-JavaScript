function solve(input) {
    function solution(num) {
        return function func(newNum) {
            return num + newNum;
        }
    }
    let add5 = solution(5);
    console.log(add5(2));
    console.log(add5(3));

}




solve()
