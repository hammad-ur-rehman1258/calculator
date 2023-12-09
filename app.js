let input=document.getElementById("inputText");
function show(inp){
    input.value+=inp;
}
function clearAll(){
    input.value="";
}
function del(){
    input.value=input.value.slice(0,-1);
}
function equal(){
    input.value=eval(input.value);
}
