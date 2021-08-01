const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

// deleteTask('d17aaa25-1172-47fb-a625-1416f096f325');
// deleteTask('6fe94036-e728-4eb9-b83c-d484e49bf67f');
// createTask("learn JS");
updateTask('supper learn JS','444100b8-8eec-43ea-97bc-6a5a3ee9820e', true);


clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived);
});

getTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise.then(onTasksReceived);
});

function onTasksReceived(tasks) {
    const result = document.querySelector('#tasks-result');
    result.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;  
        li.dataset.id = task.id;      
        result.appendChild(li);
    });
}

function onImagesReceived(array) {
    array.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}