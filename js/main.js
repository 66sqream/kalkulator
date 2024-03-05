const resultElement = document.getElementById('resultat')
    // console.log(resultElement.textContent)
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'
    // console.log(input1.value)
    // resultElement.textContent = 49
plusBtn.onclick = function() {
    action = '+'
}
minusBtn.onclick = function() {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computNumbersWithAction(inp1, inp2, actionSymblol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymblol == '+') {
        return num1 + num2
    } else if (actionSymblol == '-') {
        return num1 - num2
    }
    // return actionSymblol = '+' ? num1 + num2 : num1 - num2
}
submitBtn.onclick = function() {
    const result = computNumbersWithAction(input1, input2, action)
    printResult(result)

    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
    // console.log('hello lol')

}