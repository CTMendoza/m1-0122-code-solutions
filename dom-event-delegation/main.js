var taskList = document.querySelector('.task-list');

function editTaskList(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var taskListItem = event.target.closest('.task-list-item');
    console.log(taskListItem);
    taskListItem.remove();
  }
}

taskList.addEventListener('click', editTaskList);
