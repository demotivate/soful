//return
export function getSubjTrees(){
    const res = [];
    function helper(node){
        res.add(node.path);
        for(let i = 0; i < node.children.length; i++){
            helper(node.children[i]);
        }
    }
    helper(math);
}    

//objects
const math = {
    link: [],
    children: [add, sub],
    path: 'math'
};


const simpleAdd = {
    link: [
        'https://www.youtube.com/watch?v=0KPT5EaXUcA&ab_channel=Numberblocks',
        'https://www.youtube.com/watch?v=4rLi7DuQz6c&ab_channel=PaigeCantz'
    ],
    children: [],
    path: 'math/add/simpleAdd'
};

 
const variAdd = {
    link: [
        'https://www.youtube.com/watch?v=_CuLsnSAA0g'
    ],
    children: [],
    path: 'math/add/variAdd'
};


const add = {
    link: [],
    children: [simpleAdd, variAdd],
    path: 'math/add'
};



const simpleSub = {
    link: [
        'https://www.youtube.com/watch?v=0KPT5EaXUcA&ab_channel=Numberblocks'
    ],
    children: [],
    path: 'math/sub/simpleSub'
};

 
const variSub = {
    link: [
        'https://www.youtube.com/watch?v=_CuLsnSAA0g'
    ],
    children: [],
    path: 'math/sub/variSub'
};


const sub = {
    link: [],
    children: [simpleSub, variSub],
    path: 'math/sub'
};