var HomeList = [] 
var WorkList = []
function home() {
     HomeList.push(document.getElementById("input").value)
     document.getElementById("ToDoList_Home").innerHTML = HomeList
}
function work() {
    WorkList.push(document.getElementById("input").value)
    document.getElementById("ToDoList_Home").innerHTML = WorkList
}