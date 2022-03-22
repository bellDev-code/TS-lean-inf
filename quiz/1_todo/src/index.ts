let todoItems: object[];

function fetchTodoItems(): object[] {
    const todos = [
        { id: 1, title: '안녕', done: false},
        { id: 2, title: '타입', done: false},
        { id: 3, title: '스크립트', done: false}
    ]
    return todos;
}

// crud methods
function fetchTodos(): object[] {
    const todos = fetchTodoItems();
    return todos
}

function addTodo(todo: object): void {
    todoItems.push(todo)
}

function deleteTodo(index: number): void {
    todoItems.splice(index, 1)
}

function completeTodo(index: number, todo: object): void {
    todo.done = true
    todoItems.splice(index, 1, todo)
}

// business logic
function logFirstTodo() {
    return todoItems[0]
}

function showCompleted() {
    return todoItems.filter(item => item.done)
}

// @TODO: 아래 함수의 내용을 채워보세요
function addTwodoItems() {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할일이 2개 추가 되어야합니다.
    addTodo("1")
    addTodo("2")
}

function log() {
    console.log(todoItems)
}

todoItems = fetchTodoItems()
addTwodoItems()
log()
