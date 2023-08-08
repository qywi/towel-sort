module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0){
    return[];
  }

  let f = [];
  let t = matrix; 
  for (let i = 0; i < t.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < t[i].length; j++) {
        f.push(t[i][j]);
      }
    } else {
      for (let j = t[i].length - 1; j >= 0; j--) {
        f.push(t[i][j]);
      }
    }
  }
  return f;
};