
$(document).ready(function() {
    
    var player1 = prompt("Player One, Enter your Name you will be blue")
    var player1Color = 'rgb(86,151,255)'

    var player2 = prompt("Player 2 enter your name, you are red")
    var player2Color = 'rgb(237, 45, 73)'

    var gameOn = true;
    var table = $('table tr')

function reportWin(rowNumber, colNumber) {
    console.log('you won starting at this row and column');
    console.log(rowNumber);
    console.log(colNumber);

}



function changeColor(rowIndex,colIndex,color){

    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color)

}


function returnColor(rowIndex,colIndex,color){

        return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color')

    }


    function emptyRow(colIndex){
        var colorReport = returnColor(colIndex,5)

        for(var row = 5; row > -1; row--){
            colorReport = returnColor(colIndex, row);
            if (colorReport === 'rgb(125,125,125)'){
                return row
            }
        }
    }

});

