function receivesAFunction(callbackFunction){
    callbackFunction()
}
function returnsANamedFunction(){
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return function (){
        
    }
}