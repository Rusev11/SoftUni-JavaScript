function solve(input) {
    let guests = {};
    let guestAreComming = false
    input.forEach(element =>{
        if (element==='PARTY'){
            guestAreComming = true;
        }
        if(!guestAreComming){
            guests[element]=0;
        } else {
            delete guests[element];
        }
    })

    let guestMissing = Object.keys(guests);
    guestMissing.sort((a,b)=>{
        if(a.toLowerCase()<b.toLowerCase()){
            return -1;
        }
        if(a.toLowerCase()>b.toLowerCase()){
            return 1;
        }
        if (a.toLowerCase()===b.toLowerCase()){
            return 0;
        }
    })
    console.log(guestMissing.length);
    guestMissing.forEach(x=>console.log(x));

}


solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
//'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]



)


