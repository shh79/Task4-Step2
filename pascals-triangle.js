//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  //throw new Error('Remove this statement and implement this function');
  var triangle = [];

    if(numRows == 0) { 
        return triangle
    }

    for (var i = 0; i < numRows; i++) {

        triangle[i] = [];

        triangle[i][0] = 1;

        for (var j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }

        triangle[i][i] = 1;
    }

    return triangle;
};
