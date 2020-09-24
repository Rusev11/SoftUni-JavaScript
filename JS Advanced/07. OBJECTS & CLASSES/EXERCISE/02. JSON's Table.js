function solve(input) {
    let persons = [];
    let htmlText = [];
    htmlText.push('<table>');

    for (let line of input) {
        htmlText.push('<tr>');
        let obj = JSON.parse(line);
        htmlText.push(`<td>${obj.name}</td>`);
        htmlText.push(`<td>${obj.position}</td>`);
        htmlText.push(`<td>${obj.salary}</td>`);
        htmlText.push('</tr>');
    }
    htmlText.push('</table>');
    console.log(htmlText.join('\n'));
}
solve
    (['{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}']
    )