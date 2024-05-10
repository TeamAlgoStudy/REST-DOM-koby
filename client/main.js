document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const ul = document.querySelector('ul');
  const addTaskBtn = document.getElementById('addTaskBtn');

  const input = document.querySelector('input');

  function getAll() {
    fetch('/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        ul.innerHTML = '';
        const alltasks = data;
        const oneTask = alltasks.map((el) => {
          const task = document.createElement('li');
          const span = document.createElement('span');
          const deleteBtn = document.createElement('button');
          deleteBtn.innerText = 'Delete';

          //NOTE: need to add DELETE method to make the button work

          task.textContent = el.task;
          // task.id = el._id;
          // task.name = el._id;
          task.setAttribute('data-id', el._id);
          deleteBtn.setAttribute('data-id', el._id);
          task.appendChild(span);
          task.appendChild(deleteBtn);
          ul.appendChild(task);

          deleteBtn.addEventListener('click', (e) => {
            const deleteId = e.target.closest('li').getAttribute('data-id');
            console.log('LINE 28 DELETE ID=====>', deleteId);
            deleteTask(deleteId);
            input.focus();
          });
        });

        // return oneTask;
      })
      .catch((error) => {
        console.error('Error in GETALL', error);
      });
  }

  function deleteTask(deleteId) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ _id: deleteId }),
    };
    // console.log('line 51: deleteId = ', requestOptions);
    fetch('api/deleteTask', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('failed to delete task');
        }
        return response.text();
      })
      .then((result) => {
        console.log('delete result', result);
        document.dispatchEvent(new Event('taskDeleted'));
      })
      .catch((error) => console.error(error));
  }

  function addTask() {
    const postData = JSON.stringify({
      task: input.value,
      complete_status: false,
      target_date: '10/05/2024',
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: postData,
    };
    console.log('input.value==>', input.value, 'postData==>', postData);

    fetch('api/addTask', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log('POST request result', result);
        document.dispatchEvent(new Event('taskAdded'));
      })
      .catch((error) => console.error(error));
  }

  addTaskBtn.onclick = function () {
    addTask();
    input.value = '';
    input.focus();
  };
  document.addEventListener('taskAdded', () => {
    getAll();
  });
  document.addEventListener('taskDeleted', () => {
    getAll();
  });
  getAll();
});
