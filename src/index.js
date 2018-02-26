/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count = 0;
  if (preferences.length > 0) {
    preferences.map(function(item,index,array){
      count += recursion(item-1,index,array,3);
    });
  }
  return count == 0 ? 0 : (count - count%3)/3;

};

var temp_arr = [];

function recursion(item,i,arr,step) {
  if (step == 3) {
    temp_arr = [];
  }

  // console.log(i+"я ячейка любит "+item+"ю ячейку");
  temp_arr.push(i,item);

  if (step == 1) {
    temp_arr.sort(compareNumeric);
    return ( temp_arr[0] == temp_arr[1] && temp_arr[2] == temp_arr[3] && temp_arr[4] == temp_arr[5] ) ? 1 : 0;
  }

  return recursion(arr[item]-1,item,arr,step-1);
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
