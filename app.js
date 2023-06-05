var list = document.getElementById("list");

    function TextBtn(){
        //creat li ke ander text
    var input = document.getElementById("input");
    var li = document.createElement("li");
    var text = document.createTextNode(input.value);
    li.appendChild(text);
    
    //creat a delete button
    var deleBtn = document.createElement("button");
    var deleText = document.createTextNode("Delete");
    deleBtn.setAttribute("class" , "deleBtn");
    deleBtn.setAttribute("onclick", "deleItem(this)");
    deleBtn.appendChild(deleText);
    li.appendChild(deleBtn);
    
    //creat a edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class" , "editBtn");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    
    
    //ul ke ander li
    list.appendChild(li);
    input.value = "";
}

//deleItem function
function deleItem(e){
    e.parentNode.remove();
    console.log(e);
}
//deleBtn function
function deleBtn(){
    list.innerHTML = "";
}
//editBtn function
function editItem(g){
    var a = prompt("enter your edit", g.parentNode.firstChild.nodeValue);
    g.parentNode.firstChild.nodeValue = a;
    console.log(g);
}







