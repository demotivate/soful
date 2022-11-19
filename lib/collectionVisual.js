//return
export function getSubjTrees(){
    return math;
}

//objects
const math = {
    link: [],
    children: [add, sub]
};


const simpleAdd = {
    link: [
        'https://www.youtube.com/watch?v=0KPT5EaXUcA&ab_channel=Numberblocks',
        'https://www.youtube.com/watch?v=4rLi7DuQz6c&ab_channel=PaigeCantz'
    ],
    children: []
};

 
const variAdd = {
    link: [
        'https://www.youtube.com/watch?v=_CuLsnSAA0g'
    ],
    children: []
};


const add = {
    link: [],
    children: [simpleAdd, variAdd]
};



const simpleSub = {
    link: [
        'https://www.youtube.com/watch?v=0KPT5EaXUcA&ab_channel=Numberblocks'
    ],
    children: []
};

 
const variSub = {
    link: [
        'https://www.youtube.com/watch?v=_CuLsnSAA0g'
    ],
    children: []
};


const sub = {
    link: [],
    children: [simpleSub, variSub]
};