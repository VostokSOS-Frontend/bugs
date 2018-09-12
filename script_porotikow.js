/*for(i = 0;i <= 1000;i++){
    let line = String.fromCharCode( i);
    document.write(line);
}*/
let todolist=[];
for(i=0;i<1000;i++){
    let addTodoList = prompt('Введите');
    if(addTodoList==0){
        break;
    }
    todolist.push(addTodoList);
}

function output(){

let html='<ol>';
todolist.forEach(function(element,index) {
    html+='<li>'+element+'<button onclick="removeItem('+index+')">x</button></li>';
});
html+='</ol>';

 document.getElementById('output').innerHTML=html;
}
output();
function removeItem(index){
    todolist.splice(index,1);
    output();
}
    "<button onclick='removeItem(' + index + ')'> x </button>";

    function addItem(item){
    todolist.push(item);
    output();
    }

    function createItem(){
addItem(document.getElementById('text').value);

    }
