function createMultiplyTable(start, end) {
  if(isNumberValid(start,end)){
      return calculateMultiplyTable(start,end);
  }
  return null;
}
function isNumberValid(start, end){
  if(start <= end && start >=1 && start <= 1000 && end >=1 && end <= 1000 ){
    return true;
  }
  return false;
}

function calculateMultiplyTable(start, end){
  let multiplyTable = "";
  for(let i = start; i <= end; i++){//行数
    multiplyTable += calculateMultiplyRow(start,i);
    if(i != end){
      multiplyTable += "\n";
    }
  }
  console.log(multiplyTable);
  return multiplyTable;
}
function calculateMultiplyRow(rowStart, rowEnd){
  let multiplyRow = "";
  for(let i = rowStart; i <= rowEnd; i++){//每一行的列数
    let multiplyExpression = "" + i + "*" + rowEnd + "=" + (i*rowEnd);
    if(i != rowEnd){
      multiplyExpression += "\t";
    }
    multiplyRow += multiplyExpression ;
  }
  return multiplyRow;
}
module.exports = {
  createMultiplyTable,
};
