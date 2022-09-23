function receivesAFunction (hello) {
    return hello()
}

function returnsANamedFunction(){
    function abc(){

    }
    return abc
}

function returnsAnAnonymousFunction() {
    return function(){};
}