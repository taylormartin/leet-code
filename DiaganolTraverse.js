const mats = [
    {
        input: [[1,2,3],[4,5,6],[7,8,9]],
        output: [1,2,4,7,5,3,6,8,9]
    },
    {
        input: [[1,2],[3,4]],
        output: [1,2,3,4]
    },
];

const findDiagonalOrder = function(mat) {
    const passes = mat.length + mat[0].length - 1;
    const ordered = [];
    let end = mat.length - 1;
    let center = passes - end * 2;
    let coords = 1;
    let x = 0;
    let y = 0;

    // start section
    for(i = 0; i <= end; i++) {
        for (i=0; i<coords; i++) {
            ordered.push(mat[x][y]);
            if (coords !== 1) {
                y--;
                x++;
            }
        }
        coords = coords + 1;
        x = 0;
        y = coords - 1;
    }

    // middle section
    for(i=0; i <= center; i++) {
        let startY = y;
        for(i = 0; i < mat.length; i++) {
            ordered.push(mat[x][y]);
            y--;
            x++;
        }
        y = startY + 1;
        x = 0;
    }

    // end section
    x = 1;
    y = y - 1;
    endCoords = end;
    for(i = 0; i <= end; i++) {
        for (i = 0; i < endCoords; i++) {
            ordered.push(mat[x][y]);
            x++;
            y--;      
        }
        endCoords--;
    }


    return ordered;
};

mats.forEach((mat) => {
    console.log('computed ->', findDiagonalOrder(mat.input));
    console.log('correct ->', mat.output);
    console.log('---------------')
});