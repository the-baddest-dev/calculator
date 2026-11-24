// alert('It is connected!')

function num(yaya) {
  let userInput = document.getElementById('input')
  userInput.value += yaya
}

function equalTo() {
  let userInput = document.getElementById('input')
  userInput.value = eval(userInput.value)
}

function del(){
  let userInput = document.getElementById('input')
  userInput.value = userInput.value.slice(0,-1)
}

function ac(){
  let userInput = document.getElementById('input')
  userInput.value = userInput.value.length = ''
}