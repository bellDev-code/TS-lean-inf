enum Shoes {
    Nike,
    Adidas
}

const myShoes = Shoes.Nike;
console.log(myShoes) // 0

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

const myShoes2 = Shoes2.Nike;
// console.log(myShoes2)

// 예제

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다.')
    }
    if(answer === Answer.No) {
        console.log('오답입니다.')
    }
}

// enum에서 제공하는 데이터만 값만 넘길 수 있다.
askQuestion(Answer.Yes)
// askQuestion('예쓰')
// askQuestion('y')
// askQuestion('Yes')