export default function multiplyMatrices(a, b) {
  const rowsA = a.length;
  const colsA = a[0].length;
  const colsB = b[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

// let a = [[2, 3], [4, 5], [6, 7]];
// let b = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let c = multiplyMatrices(a, b);
