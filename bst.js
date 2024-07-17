class Node {
    constructor(data, leftChild, rightChild){
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

class Tree {
    constructor(array){
        this.array = array;
        this.root = null;
    }

    buildTree(array){
        return this.mergeSort(array);
    }

    removeDuplicates(array){
        return [... new Set(array)];
    }

    mergeSort(array) {
        let arr = this.removeDuplicates(array);
        if (arr.length < 2){
            return array;
        } 
        var half = Math.floor(arr.length / 2);
        var leftArr = arr.slice(0, half);
        var rightArr = arr.slice(half);
        return this.merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
    }
    
    merge(leftArr, rightArr) {
        var sortedArr = [];
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

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let tree = new Tree(arr);

console.log(tree.buildTree(arr));
