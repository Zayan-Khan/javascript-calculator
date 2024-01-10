let inputShow = document.getElementById('answer');

function showVal(value) {

  inputShow.value += value;

}

function clearInput() {

  inputShow.value = '';

}

function calculate() {

  let result = eval(answer.value);

  inputShow.value = result;

}





