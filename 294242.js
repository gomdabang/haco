const memos = [
    {id: 1}, 
    {id: 2}, 
    {id: 3}, 
    {id: 4}, 
    {id: 5}
];

const m1 = memos.find(function(obj) {
    return obj.id === 1; 
});

console.log(m1); // output: {id: 1}


const binding = function(id) {
    return memos.find(function(obj) {
        return obj.id === id;
    });
};

const m2 = binding(1);

console.log(m2); // output: {id: 1}
