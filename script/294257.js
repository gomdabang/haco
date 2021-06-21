const obj = {
    key: 'value'
};

function func1({key}) { 
    console.log(key); 
}

func1(obj); // output 'value'

function func2(props) { 
    console.log(props.key); 
}

func2(obj); // output 'value'
