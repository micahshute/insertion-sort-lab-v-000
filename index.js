function findMinAndRemove(array){
  let min = array[0];
  let min_index = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      min_index = i
    }
  }
  array.splice(min_index, 1)

  return min
}

function insertionSort(array){
  let sorted_arr = []
  while(array.length > 0){
    let minimum = findMinAndRemove(array)
    sorted_arr.push(minimum)
  }
  return sorted_arr
}
