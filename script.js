let todoList=[];
displayItems();

function addTodo()
{
    let inputElement= document.querySelector("#taskInput");
    let dateElement= document.querySelector("#todoDate");
    let todoItem =inputElement.value;
    let todoDate= dateElement.value;
    let obj={item: todoItem, dueDate: todoDate};
    if(todoItem==null || todoItem=="")
    {
        alert("task cannot be empty");
    }else if(todoDate==null || todoDate=="")
    {
        alert("choose date");
    }else
    {
        if(localStorage.getItem("todo")===null)
    {
        localStorage.setItem("todo",JSON.stringify(todoList));
    }    
    let list=JSON.parse(localStorage.getItem("todo"));
    list.push(obj);
    localStorage.setItem("todo",JSON.stringify(list));
    inputElement.value='';
    dateElement.value='';
    }
            
    displayItems();
}

function displayItems()
{
    let tasklist=document.querySelector("#taskList");
    tasklist.innerHTML='';  
    let list=JSON.parse(localStorage.getItem("todo"));  

    for(let i=0;i<list.length;i++)
    {
        let item=list[i].item;
        let dueDate=list[i].dueDate;
        const li=document.createElement('li');
        li.innerHTML=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <Button class="delete" onclick="deleteItem(${i})">delete</Button>`;  
        tasklist.appendChild(li);      
    }
}

function deleteItem(index)
{
    let list=JSON.parse(localStorage.getItem("todo")); 
    list.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(list));
    displayItems();
}