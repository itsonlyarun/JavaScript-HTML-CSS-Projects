let todoList=[
    {
        items:'Buy Milk',
        dueDate:'28/01/2024'
    },
    {
        items:'Go to farm',
        dueDate:'28/01/2024'
    }
];
displayItems()

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    // console.log(todoItem);
    let todoDate=dateElement.value;

    todoList.push({items:todoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';

    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('#todo-container');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        // let items=todoList[i].items;
        // let dueDate=todoList[i].dueDate;

        let {items,dueDate}=todoList[i];
        newHtml+=`
        <span>${items}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems()">Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml;
}

// function displayItems(){
//     let displayElement=document.querySelector('#todo-items');
//     displayElement.innerText='';
//     for(let i=0;i<todoList.length;i++){
//         displayElement.innerText=displayElement.innerText+'\n'+todoList[i];
//     }
// }