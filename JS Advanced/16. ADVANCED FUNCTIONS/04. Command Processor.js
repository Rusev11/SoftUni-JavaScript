function solve() {
    function result() {
        let text = '';
        function append(string) {
            text += string;
        }
        function removeStart(num) {
            text = text.slice(num);
        }
        function removeEnd(num) {
            text = text.slice(0, text.length - num );
        }
        function print() {
            console.log(text);
        }
        return {
            append,
            removeStart,
            removeEnd,
            print
        }
    }
    let firstZeroTest = result();

    firstZeroTest.append('hello');
    firstZeroTest.append('again');
    firstZeroTest.removeStart(3);
    firstZeroTest.removeEnd(4);
    firstZeroTest.print();
    let secondZeroTest = result();

    secondZeroTest.append('123');
    secondZeroTest.append('45');
    secondZeroTest.removeStart(2);
    secondZeroTest.removeEnd(1);
    secondZeroTest.print();

}


solve()
