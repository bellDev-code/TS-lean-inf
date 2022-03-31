type Email = {
    value: string;
    selected: boolean;
}

const emails: Email[] = [
    { value: 'naver.com', selected: true},
    { value: 'google.com', selected: true},
    { value: 'hanmail.com', selected: true}
]

type ProductNumber = {
    value: number;
    selected: boolean
}

type TrueFalse = {
    value: boolean;
    selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
    { value: 1, selected: true},
    { value: 2, selected: false},
    { value: 3, selected: false}
]

function createDropdownItem(item: Email | ProductNumber) {
    const option = document.createElement('option')

    option.value = item.value.toString()
    option.innerText = item.value.toString()
    option.selected = item.selected
    return option
}

emails.forEach(function (email) {
    const item = createDropdownItem(email)
    const selectTag = document.querySelector('#email-dropdown')
    selectTag.appendChild(item)
})

numberOfProducts.forEach(function(product) {
    const item = createDropdownItem(product)
})