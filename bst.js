class Node {
    constructor(){
        this.data = null;
        this.leftChild = null;
        this.rightChild = null;
    }
}

export class Tree {
    constructor(array){
        this.array = array;
        this.root = null;
    }

    buildTree(array, start = 0, end = array.length - 1){
        let mid = Math.ceil((start + end) / 2);
        let root = new Node();
        root.data = array[mid];
        if(start > end) {
            return;
        }
        if(this.root === null){
            this.root = root;
        }
        root.leftChild = this.buildTree(array, start, mid - 1);
        root.rightChild = this.buildTree(array, mid + 1, end);
        return root;
    }

    

}


export class cleanData{
    constructor(array){
        this.array = array;
    }

    removeDuplicates(array){
        return [... new Set(array)];
    }

    mergeSort(array = this.array) {
        let arr = this.removeDuplicates(array);
        if (arr.length < 2){
            return array;
        } 
        let half = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, half);
        let rightArr = arr.slice(half);
        return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
    }
    
    merge(leftArr, rightArr) {
        let sortedArr = [];
        while(leftArr.length && rightArr.length){
            if(leftArr[0] <= rightArr[0]){
                sortedArr.push(leftArr.shift());
            }
            else {
                sortedArr.push(rightArr.shift());
            }
        }
        return [...sortedArr, ...leftArr, ...rightArr];
    }
   
}




export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }
    if (node.rightChild !== null) {
      prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.leftChild !== null) {
      prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};


