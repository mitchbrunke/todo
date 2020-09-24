//Selectors
const list = document.querySelector(".todos");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");

//functions

const generateTemplate = (toDo) => {
  const newToDo = ` <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span> ${toDo} </span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += newToDo;
};

//add event listeners

//add to do
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const toDo = addForm.add.value.toLowerCase().trim();

  if (toDo.length) {
    generateTemplate(toDo);
    addForm.reset();
  }
});

// search function

const filterToDos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//delete button
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//keyup for search
search.addEventListener("keyup", () => {
  const term = search.value.toLowerCase().trim();
  filterToDos(term);
});
