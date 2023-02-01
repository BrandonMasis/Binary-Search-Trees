import { mergeSort, removeDuplicates } from './functions.js';

const nodeFactory = (data, left, right) => {
  return { data, left, right };
};

const treeFactory = (array) => {
  array = mergeSort(removeDuplicates(array));
  let root = buildTree(array, 0, array.length - 1);
  return { root };
};

function buildTree(array, start, end) {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);

  let root = nodeFactory(array[mid]);
  root.left = buildTree(array, start, mid - 1);
  root.right = buildTree(array, mid + 1, end);

  return root;
}

let test = treeFactory([1, 2, 34, 5, 6, 7, 8, 9, 0, 10, 23]);

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

prettyPrint(test.root);
