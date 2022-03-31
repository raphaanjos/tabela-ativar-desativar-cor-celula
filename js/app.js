// fontes: 
// https://youtu.be/PU3Vz1O1jOU 
// https://www.w3schools.com/

let table = document.getElementById('table');
let line, column;

for (let i = 1; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].addEventListener('click', function () {
            line = table.rows[i].rowIndex
            column = table.rows[i].cells[j].cellIndex;
            setActivateDeactivateCell(line, column);
            console.log(`linha: ${line} - coluna: ${column}`);
        });
    }
}

// ativa ou desativa uma célula com uma cor ao clicar
setActivateDeactivateCell = (rIndex, cIndex) => {
    let elemento = table.rows[rIndex].cells[cIndex];
    if (elemento.style.backgroundColor !== '') {
        elemento.style.backgroundColor = '';
    } else {
        elemento.style.backgroundColor = '#eaeae1';
    }
}


