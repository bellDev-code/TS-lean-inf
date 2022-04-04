// function logText(text) {
//     console.log(text)
//     return text
// }

// logText(10)
// logText('하이')
// logText(true)   

// function logText<T>(text: T): T {
//     console.log(text)
//     return text
// }

// logText<string>('하이')

// 기존 함수를 여러개 정의
// 단순히 타입을 받기 위해 중복된 함수를 계속 만들면 유지보수 측면에서 안좋음
// function logText(text: string) {
//     console.log(text)
//     // text.split('').reverse().join('')
//     return text
// }

// function logNumber(num: number) {
//     console.log(num)
//     return num
// }

// logText('a')
// logText(10)
// const nums = logNumber(10)
// nums.
// logText(true)

// function logText(text: string | number) {
//     console.log(text)
//     return text
// }

// const a = logText('a')
// 문제점
// 타입을 정확하게 알아야 split(문자열 api) 쓸 수 있다.
// a.split('')
// logText(10)

function logText<T>(text: T): T {
    console.log(text)
    return text
}

// 제네릭의 장점
const string = logText<string>('abc')
string.split('')
const login = logText<boolean>(true)

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const example: Dropdown = { value: 'abc', selected: false }

interface Dropdown<T> {
    value: T;
    selected: boolean;
} 

const exampleObj: Dropdown<number> = { value: 10, selected: false}

// 제네릭의 타입 제한
// function logTextLength<T>(text: T) {
//     return text
// }

// logTextLength('hi')

function logTextLength<T>(text: T[]): T[] {
    console.log(text.length)
    text.forEach(function (text) {
        console.log(text)
    })
    return text
}

logTextLength<string>('hi', 'abc')