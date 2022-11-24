const add = document.querySelector("#addTodo");
add.addEventListener('click', () => {
  const inputTodo = document.querySelector("#input").value;
  const todoList = document.querySelector("#todoList");

  const li = document.createElement("li");
  const liCheckbox = document.createElement("input");
  liCheckbox.type = "checkbox";
  liCheckbox.checked = false;
  const nodetext = document.createTextNode(inputTodo);
  
  // 末子へ入れていく
  li.appendChild(liCheckbox);
  li .appendChild(nodetext);
  todoList.appendChild(li);

  // フォームを空へ
  document.querySelector("#input").value = "";
});