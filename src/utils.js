const getById = name => document.querySelector('#' + name);

const getObjectProperty = object => key => object[key];
const setObjectProperty = object => key => value => object[key] = value;

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

export { 
    getById,
    getObjectProperty,
    setObjectProperty,
    debounce,
}
