//return
export function getSubjTrees(){
    const res = [];
    function helper(node){
        res.push({
            params: {
                path: node.path,
            },
        });
        for(let i = 0; i < node.children.length; i++){
            helper(node.children[i]);
        }
    }
    helper(menu);

    console.log(res);
    return res;
}    

export function getSubjData(path){
    function findData(currPath, desPath){
        if(currPath.path === desPath) return currPath;
        for(let i = 0; i < currPath.children.length; i++){
            curr = findData(currPath.children[i]);
            if(curr != null) return curr;
        }
        return null;
    }

    const data = findData(menu, path);

    return{
        path,
        data
    }
}

//objects
const simpleAdd = {
    link: [
        'https://www.youtube.com/watch?v=0KPT5EaXUcA&ab_channel=Numberblocks',
        'https://www.youtube.com/watch?v=4rLi7DuQz6c&ab_channel=PaigeCantz'
    ],
    children: [],
    // path: 'math/add/simpleAdd'
    path: 'math-add-simpleAdd'
};

 
const variAdd = {
    link: [
        'https://www.youtube.com/watch?v=_CuLsnSAA0g'
    ],
    children: [],
    // path: 'math/add/variAdd'
    path: 'math-add-variAdd'
};


const add = {
    link: [],
    children: [simpleAdd, variAdd],
    // path: 'math/add'
    path: 'math-add'
};



const simpleSub = {
    link: [
        'https://www.youtube.com/watch?v=0KPT5EaXUcA&ab_channel=Numberblocks'
    ],
    children: [],
    // path: 'math/sub/simpleSub'
    path: 'math-sub-simpleSub'
};

 
const variSub = {
    link: [
        'https://www.youtube.com/watch?v=_CuLsnSAA0g'
    ],
    children: [],
    // path: 'math/sub/variSub'
    path: 'math-sub-variSub'
};


const sub = {
    link: [],
    children: [simpleSub, variSub],
    // path: 'math/sub'
    path: 'math-sub'
};

const simpleMulti = {
    link: [
        'https://www.youtube.com/watch?v=GKetIwxaenA',
        'https://www.youtube.com/watch?v=FJ5qLWP3Fqo'
    ],
    children: [],
    // path: 'math/multi/simpmulti'
    path: 'math-multi-simpmulti'
};

 
const variMulti = {
    link: [
        'https://www.youtube.com/watch?v=jpD_BugTR6I&ab_channel=BrianMcLogan'
    ],
    children: [],
    // path: 'math/multi/varimulti'
    path: 'math-multi-varimulti'
}


const multi = {
    link: [],
    children: [simpleMulti, variMulti],
    // path: 'math/multi'
    path: 'math-multi'
}

const simpleDivi = {
    link: [
        'https://www.youtube.com/watch?v=KGMf314LUc0',
        'https://www.youtube.com/watch?v=yAJxHO7CLh4'
    ],
    children: [],
    // path: 'math/divi/simpledivi'
    path: 'math-divi-simpledivi'
};

 
const variDivi = {
    link: [
        'https://www.youtube.com/watch?v=_CuLsnSAA0g'
    ],
    children: [],
    // path: 'math/divi/varidivi'
    path: 'math-divi-varidivi'
}


const divi = {
    link: [],
    children: [simpleDivi, variDivi],
    // path: 'math/divi'
    path: 'math-divi'
}
 
const math = {
    link: [],
    children: [add, sub, multi, divi],
    path: 'math'
};

const menu = {
    link: [],
    children: [math],
    path: 'menu'
}