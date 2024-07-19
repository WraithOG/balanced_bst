import { Tree } from "./bst.mjs";
import { cleanData } from "./bst.mjs";
import { prettyPrint } from "./bst.mjs";

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let data = new cleanData(arr);
let cData = data.mergeSort();

let tree = new Tree(cData);
let root = tree.buildTree(cData);
tree.insert(root, 10);

prettyPrint(tree.root);