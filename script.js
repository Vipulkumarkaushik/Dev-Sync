document.getElementById('themeToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark', this.checked);
});

document.getElementById('addBoard').addEventListener('click', () => {
  const name = prompt('Enter board name:');
  if (name) {
    const li = document.createElement('li');
    li.textContent = name;
    document.getElementById('boardList').appendChild(li);
  }
});

document.querySelectorAll('.add-task').forEach(button => {
  button.addEventListener('click', () => {
    const text = prompt('Enter task:');
    if (text) {
      const div = document.createElement('div');
      div.textContent = text;
      div.className = 'task';
      button.previousElementSibling.appendChild(div);
    }
  });
});
