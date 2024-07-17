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


    
    buildTree(array, start = 0, end = arr.length - 1){
        let arr = array;
        let mid = Math.ceil((start + end) / 2);
        let root = new Node();
        root.data = arr[mid];
        if(start > end) {
            return;
        }
        root.leftChild = this.buildTree(arr, start, mid - 1);
        root.rightChild = this.buildTree(arr, mid + 1, end);
        return root;
    }

    

}


class cleanData{
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


let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let data = new cleanData(arr);
let cleanData = data.mergeSort();
