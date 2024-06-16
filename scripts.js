document.addEventListener('DOMContentLoaded', () => {
    const taskNameInput = document.getElementById('task-name');
    const taskDateInput = document.getElementById('task-date');
    const taskPrioritySelect = document.getElementById('task-priority');
    const taskCategorySelect = document.getElementById('task-category');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskName = taskNameInput.value.trim();
        const taskDate = taskDateInput.value;
        const taskPriority = taskPrioritySelect.value;
        const taskCategory = taskCategorySelect.value;

        if (taskName) {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <span>${taskName} (Due: ${taskDate}, Priority: ${taskPriority}, Category: ${taskCategory})</span>
                <div>
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            taskList.appendChild(taskItem);

            taskNameInput.value = '';
            taskDateInput.value = '';
            taskPrioritySelect.value = 'low';
            taskCategorySelect.value = 'work';

            taskItem.querySelector('.complete-btn').addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });

            taskItem.querySelector('.delete-btn').addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
        }
    });
});
