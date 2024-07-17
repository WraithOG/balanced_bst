import { Tree } from "./bst";
import { cleanData } from "./bst";
import { prettyPrint } from "./bst";

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let data = new cleanData(arr);
let cData = data.mergeSort();

let tree = new Tree(cData);
tree.buildTree(cData);

prettyPrint(tree.root);