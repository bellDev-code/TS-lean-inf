// Union Type 하나의 타입 이상을 쓸 수 있게 만든다.
// 타입 구분
// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀가는(필터링 하는) 과정
let leejong: string | number | boolean

function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString()
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number')
}

logMessage('hello')
logMessage(100)

interface Developer {
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

// 유니언 타입
function askSomeone(someone: Developer | Person3) {
    // 유니언 타입의 공통된 속성만 접근할 수 있다.
    // 타입 가드를 통한 조건을 걸어 접근 가능 (추후 진행)
    // someone.name
    // someone.skill
    // someone.age
}

// askSomeone({ name: '디펠로퍼', skill: '웹 개발'})
// askSomeone({ name: '캡틴', age: 10})

// 인터섹션 타입
function askSomeone2(someone: Developer & Person3) {
    someone.name
    someone.skill
    someone.age
}

// askSomeone2({ name: '디펠로퍼', skill: '웹 개발', age: 28})
// askSomeone2({ name: '캡틴', age: 10})


// & 
let capt3: string & number & boolean;

// 실무에서는 유니언 타입을 더 많이 쓴다.