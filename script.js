function displayNumber(num){
    result.value+=num;
}
function clearBox(){
    result.value=""
}
function evaluvate(){
    expn=result.value;
    output=eval(expn);
    result.value=output;
}
function clearData(){
    number=result.value;
    result.value=number.slice(0,-1);
}
