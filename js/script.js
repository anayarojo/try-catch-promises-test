function trueOrFalse(){
    return false;
    // return Math.random() >= 0.5;
};

function promiseA(){
    return new Promise(function(resolve){
        if(trueOrFalse()){
            throw new Error('ExceptionA');
        }
        setTimeout(function(){
            console.log('promiseA');
            resolve();
        }, 1000);
    });
};

function promiseB(){
    return new Promise(function(resolve){
        if(trueOrFalse()){
            throw new Error('ExceptionB');
        }
        setTimeout(function(){
            console.log('promiseB');
            resolve();
        }, 1000);
    });
};

function promiseC(){
    return new Promise(function(resolve){
        if(trueOrFalse()){
            throw new Error('ExceptionC');
        }
        setTimeout(function(){
            console.log('promiseC');
            resolve();
        }, 1000);
    });
};

function promiseD(){
    return new Promise(function(resolve){
        if(trueOrFalse()){
            throw new Error('ExceptionD');
        }
        setTimeout(function(){
            console.log('promiseD');
            resolve();
        }, 1000);
    });
};

$(document).ready(function(){
    console.log('Document ready');

    promiseA()
    .then(() => { return promiseB(); })
    .then(() => { return promiseC(); })
    .then(() => { return promiseD(); })
    .then(() => { console.log('Work finished.'); })
    .catch((error) => {
        console.log('Aqui no paso nada');
        //console.error(error);
    });
});