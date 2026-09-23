const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    const task = inputBox.value.trim();
    if(!task){
        alert('DEBES DE ESCRIBIR ALGO!');
        return

    }

    const li = document.createElement('li');
    li.textContent = task;
    listContainer.appendChild(li);
    
    inputBox.value = '';

    document.createElement('span')
    const span = document.createElement('span');
    li.appendChild(span);
    span.textContent = '\u00d7';
    span.classList.add('delete-btn');

    showMessage();
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if (e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove();

        showMessage();
        saveData();
    }
})

const emptyMessage = document.createElement('p');
emptyMessage.textContent = 'No hay tareas pendientes';
emptyMessage.className = 'message';

listContainer.parentElement.appendChild(emptyMessage);

function showMessage(){
    emptyMessage.style.display = listContainer.children.length === 0 ? 'block' : 'none';
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function ShowTask () {
    listContainer.innerHTML = localStorage.getItem('data');
    showMessage();
}

ShowTask();
