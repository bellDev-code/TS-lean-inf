type Todos = {
    id: number;
    title: string;
    done: boolean;
}

let todoItems: Todos[];

function fetchTodoItems(): Todos[] {
    const todos = [
        { id: 1, title: '안녕', done: false},
        { id: 2, title: '타입', done: false},
        { id: 3, title: '스크립트', done: false}
    ]
    return todos;
}

// crud methods
function fetchTodos(): Todos[] {
    const todos = fetchTodoItems();
    return todos
}

function addTodo(todo: Todos) {
    todoItems.push(todo)
}

function deleteTodo(index: number) {
    todoItems.splice(index, 1)
}

function completeTodo(index: number, todo: Todos) {
    todo.done = true
    todoItems.splice(index, 1, todo)
}

// business logic
function logFirstTodo(): object {
    return todoItems[0]
}

function showCompleted(): Todos[] {
    // return todoItems.filter(item => item.done)
    return todoItems.filter(function(item) {
        if(item.done) {
            return item
        }
    })
}

// @TODO: 아래 함수의 내용을 채워보세요
function addTwodoItems(): void {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할일이 2개 추가 되어야합니다.
    addTodo({
        id: 4,
        title: '아이템',
        done: false
    })
    addTodo({
        id: 5,
        title: '흐에',
        done: false
    })
}

function log(): void {
    completeTodo(6, {id: 6, title: 'coding', done: true})
    completeTodo(7, {id: 7, title: 'boxing', done: true})

    

    console.log(todoItems)
}

todoItems = fetchTodoItems()
addTwodoItems()
showCompleted()
log()
