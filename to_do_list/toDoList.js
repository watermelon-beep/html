const listTask = [];

const addTask = () => {
    const userTask = document.getElementById("userTask").value;
    const allList = document.getElementById("allList");
    listTask.push(userTask);
    allList.innerHTML = "";

    listTask.forEach((task, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        const div = document.createElement("div");
        div.classList.add("row");
        button.textContent = "remove";
        button.classList.add("remove-button");
        button.onclick = () => {
        listTask.splice(index, 1);
        addTask();
        };

        li.textContent = task;
        allList.appendChild(div);
        div.appendChild(li);
        div.appendChild(button);

    });

    document.getElementById("userTask").value = "";
}

