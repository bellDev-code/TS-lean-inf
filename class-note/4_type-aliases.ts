// interface Person {
//     name: string;
//     age: number;
// }

type Person2 = {
    name: string;
    age: number;
}

const ho: Person2 = {
    name: 'jongho',
    age: 28
}

type MyString = string;
const str2: MyString = 'hello'

type Todo = { id: number, title: string, done: boolean }

// 타입 별칭의 장점
// 매개변수에 일일이 적지 않아도 된다.
function getTodo(todo: Todo) {
    // ...
}

