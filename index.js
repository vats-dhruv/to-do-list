const taskArea = document.getElementById('text-bar');
const submitBtn = document.getElementById('submit-btn');
let taskList = [];
console.log('hello world');


function showList(){
    let listItem = document.getElementById('task-list');
    listItem.innerHTML = '';  // Clear existing list items
    for(let i=0;i<taskList.length;i++){
        let li = document.createElement('li');
        li.innerText=taskList[i];
        listItem.appendChild(li);
        console.log("hello")
    }
}

submitBtn.addEventListener("click", function() {
    if(taskArea.value.trim() !== ''){
    taskList.push(taskArea.value);
    console.log(taskList);
    taskArea.value='';
    showList();
}
});
