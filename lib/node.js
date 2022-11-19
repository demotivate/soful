class Node{
    constructor(key, value = key, parent = null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
}