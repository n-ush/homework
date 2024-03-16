function drawTriangle(rows, symbol) {
    for (let i = 1; i <= rows; i++) {
        let pattern = ''; 
        
        for (let j = 1; j <= i; j++) {
            pattern += symbol;
        }
        console.log(pattern);
    }
}


drawTriangle(5, '*');


function drawTriangle2(rows, symbol) {
    let i = 1;
    while (i <= rows) {
        let j = 1;
        let pattern = '';
        while (j <= i) {
            pattern += symbol;
            j++;
        }
        console.log(pattern);
        i++;
    }
}

drawTriangle2(8, '$');