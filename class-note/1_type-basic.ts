// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str:string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3]
// let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]
let items: number[] = [1, 2, 3]

// TS 튜플 -> 배열의 특정 인덱스, 순서의 타입까지 정의
let address: [string, number] = ['gangnam', 20]

// TS 객체
// let obj = {}
let obj: object = {}
// let person: object = {
//     name: 'lee',
//     age: 28
// }
let person: { name: string, age: number } = {
    name: 'lee',
    age: 28
}

// TS 진위값
// let show = true
let show: boolean = true