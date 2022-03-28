interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const lee: User = {
    age: 28,
    name: 'jongho'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    // console.log(user)
}

const capt = {
    name: '흐에',
    age: 100
}

getUser(capt)

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
}

let sum2: SumFunction;
sum2 = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

const arr2 = ['a', 'b', 'c']
arr2[0]

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

const obj2: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj2['cssFile'] = 'a'

Object.keys(obj2).forEach(function(value){})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

const captain: Developer = {
    language: 'ts',
    age: 28,
    name: 'jongho'
}