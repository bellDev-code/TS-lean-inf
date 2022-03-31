function Person(name, age) {
    this.name = name
    this.age = age
}

const capt = new Person('캡틴', 100)

// ES6 문법 위와 아래는 같다.
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name
        this.age = age
    }
}

// new Person() // 생성 되었습니다.
const result = new Person('jongho', 28)
console.log(result)