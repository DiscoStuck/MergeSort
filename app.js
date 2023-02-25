function mergeSort(array) {
  if (array.length <= 1) return array;
  else {
    const leftArray = array.slice(0, Math.floor(array.length / 2));
    const sortedLeftArray = mergeSort(leftArray);
    const rightArray = array.slice(Math.floor(array.length / 2));
    const sortedRightArray = mergeSort(rightArray);
    const mergedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!sortedLeftArray[0]) {
        mergedArray.push(sortedRightArray[0]);
        sortedRightArray.splice(0, 1);
      } else if (!sortedRightArray[0]) {
        mergedArray.push(sortedLeftArray[0]);
        sortedLeftArray.splice(0, 1);
      } else if (sortedRightArray[0] <= sortedLeftArray[0]) {
        mergedArray.push(sortedRightArray[0]);
        sortedRightArray.splice(0, 1);
      } else {
        mergedArray.push(sortedLeftArray[0]);
        sortedLeftArray.splice(0, 1);
      }
    }
    return mergedArray;
  }
}

console.log(mergeSort([3, 6, 123, 6, 34, 12]));
