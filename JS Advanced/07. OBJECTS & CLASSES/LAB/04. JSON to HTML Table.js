function solve(inputString) {

    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
     }


    let outputArray = [];
    input = JSON.parse(inputString);
    outputArray.push('<table>');
    let props = Object.keys(input[0]);
    let headStr = '   <tr>'
    props.forEach(prop=>{
        headStr +=`<th>${prop}</th>`;
    });
    headStr += '</tr>';
    outputArray.push(headStr);
    for (let line of input) {
        let rowStr = '   <tr>';
        props.forEach(prop=>{
            let currentProp = line[prop];
            if(typeof currentProp === 'string'){
             currentProp = escapeHtml(currentProp);
            }
            rowStr += `<td>${currentProp}</td>`;
        });
        rowStr += '</tr>'; 
        outputArray.push(rowStr);  
    }
    outputArray.push('</table>');
    console.log(outputArray.join('\n'));
    //return outputArray.join('\n');
}

solve(
    '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'
)
