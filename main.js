function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
  
    if (taskText.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskText;
      
      var deleteBtn = document.createElement("span");
      deleteBtn.textContent = "❌";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function() {
        taskList.removeChild(li);
      };
      
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
}