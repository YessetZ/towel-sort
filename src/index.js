// You should implement your task here.

module.exports = function towelSort (matrix) {
  
    if (matrix === undefined) return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].sort(function(a, b) {return b - a;});
        }
    }

    let arr = new Array();

    for (let i in matrix) {
        for (let j in matrix[i]) {
            arr.push(matrix[i][j]);
        }
    }

    return arr;
}
