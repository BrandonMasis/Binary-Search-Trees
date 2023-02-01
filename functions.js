function merge(leftHalf, rightHalf) {
  var mergedArray = [];
  var leftCount = 0,
    rightCount = 0;
  while (leftCount < leftHalf.length && rightCount < rightHalf.length) {
    if (leftHalf[leftCount] < rightHalf[rightCount]) {
      mergedArray.push(leftHalf[leftCount]);
      leftCount++;
    } else {
      mergedArray.push(rightHalf[rightCount]);
      rightCount++;
    }
  }
  if (leftHalf[leftCount]) {
    var unaddedElements = leftHalf.slice(leftCount);
    mergedArray.push.apply(mergedArray, unaddedElements);
  } else {
    var unaddedElements = rightHalf.slice(rightCount);
    mergedArray.push.apply(mergedArray, unaddedElements);
  }
  return mergedArray;
}
function mergeSort(arr) {
  var middleIndex = Math.floor(arr.length / 2);
  var leftHalf = arr.slice(0, middleIndex);
  var rightHalf = arr.slice(middleIndex);
  if (arr.length < 2) {
    return arr;
  }
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function removeDuplicates(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

export { mergeSort, removeDuplicates };
