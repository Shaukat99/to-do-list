const item = document.querySelector("#to-do-app");
const toDoBox = document.querySelector("#to-do-list");

item.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addToDo(this.value);
        this.value = "";
    }
});

const addToDo = (item) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `${item} <i class="fas fa-times"></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });

    listItem.querySelector("i").addEventListener("click", function (e) {
        e.stopPropagation(); // click parent tak nahi jayega
        listItem.remove();
    });

    toDoBox.appendChild(listItem);
};