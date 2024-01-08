
// function Sum(x, y, z){
//   console.log("the sum of 2 + 2 + 2 is");
//   return (x + y + z);
// }

// let a = 2;
// let b = 2;
// let c = 2;


// console.log(Sum(a, b, c));


// x-----------------------x


// alert("For Entering The Value Of \"a\" Enter Ok")
// let e = prompt("Enter the Value")
// document.write("The Value You Typed In Prompt Box is:  ")
// document.write(e)

// let a = prompt("Enter 1st Number");

// let b = prompt("Enter 2st Number");

// alert(a + b)

// document.write(a + b)


// x-----------------------x


// function Sum() {

//   val1 = document.getElementById('frst').value;

//   val2 = document.getElementById('sec').value;

//   result = parseFloat(val1) + parseFloat(val2)

//   document.getElementById('thrd').value = result;

//   document.getElementById('thrd').value = sum;

//   document.getElementById('thrd').disabled = false;
// }


// x-----------------------x


// let a = 2;
// let b = 3;
// console.log(a + b)


// x-----------------------x


// function add(){





//   document.getElementById('thrd').disabled = false;
// }






// function calculate() {
//   // Get input values
//   const num1 = parseFloat(document.getElementById('num1').value);
//   const num2 = parseFloat(document.getElementById('num2').value);
//   const operation = document.getElementById('operation').value;

//   // Perform calculation based on the selected operation
//   let result;
//   switch (operation) {
//       case 'add':
//           result = num1 + num2;
//           break;
//       case 'minus':
//           result = num1 - num2;
//           break;
//       case 'multiply':
//           result = num1 * num2;
//           break;
//       case 'divide':
//           result = num1 / num2;
//           break;
//       default:
//           result = 'Invalid operation';
//   }

//   // Display the result
//   document.getElementById('result').innerText = `Result: ${result}`;
// }




// x-----------------------x






// let currentInput = '';
// let currentOp  n = '';
// let result = '';

// function appendToDisplay(value) {
//   currentInput += value;
//   document.getElementById('display').value = currentInput;
// }

// function setOperation(operation) {
//   if (currentInput !== '') {
//     currentOperation = operation;
//     result = currentInput;
//     currentInput = '';
//   }
// }

// function calculate() {
//   if (currentInput !== '') {
//     switch (currentOperation) {
//       case '+':
//         result = parseFloat(result) + parseFloat(currentInput);
//         break;
//       case '-':
//         result = parseFloat(result) - parseFloat(currentInput);
//         break;
//       case '*':
//         result = parseFloat(result) * parseFloat(currentInput);
//         break;
//       case '/':
//         result = parseFloat(result) / parseFloat(currentInput);
//         break;
//       default:
//         break;
//     }

//     document.getElementById('display').value = result;
//     currentInput = '';
//     currentOperation = '';
//   }
// }
// function updateDisplay() {
//   // Get the input value
//   var inputValue = document.getElementById('display').value;

//   // Update the display with the typed numbers
//   document.getElementById('displayInput').innerText = inputValue;
// }



// x-----------------------x



// function updateparagraph() {
//   var forinput = document.getElementById('forinput').value
//   document.getElementById('showed').innerText = forinput
// }


// x-----------------------x




// function appendToDisplay(value) {
//   document.getElementById('display').value += value;
// }

// function clearDisplay() {
//   document.getElementById('display').value = '';
// }

// function calculateResult() {
//   try {
//     document.getElementById('display').value = eval(document.getElementById('display').value);
//   } catch (error) {
//     document.getElementById('display').value = 'Error';
//   }
// }




// x-----------------------x





// let isNewCalculation = true;

// function appendToDisplay(value) {
//   if (isNewCalculation) {
//     clearDisplay();
//     isNewCalculation = false;
//   }
//   document.getElementById('display').value += value;
// }

// function clearDisplay() {
//   document.getElementById('display').value = '';
// }

// function calculateResult() {
//   try {
//     document.getElementById('display').value = eval(document.getElementById('display').value);
//     isNewCalculation = true;
//   } catch (error) {
//     document.getElementById('display').value = 'Error';
//   }
// }




// x-----------------------x



// const item = {
//   name: "Zayan",
//   age: 20,
// }
// console.log(item)

// item['class'] = "secondyear"

// console.log(item)



// x-----------------------x



// function getName() {
//   var a = 6;
//   var b = 6;
//   var c = a + b;
//   return c;
// }

// function updateParagraph(){

//   var result = getName();

//   var paragraph = document.getElementById('showme');

//   paragraph.textContent = 'the result is: ' + result;

// }


// var button = document.getElementById('myButton');
// button.addEventListener('click', updateParagraph);




// x-----------------------x


// function updateParagraph() {

//   var inputText = document.getElementById('type');

//   var result = inputText.value;

//   var paragraph = document.getElementById('typer');

//   paragraph.innerHTML = "You Wrote: " + result;
// }



// x-----------------------x


// function toggleBulb() {

//   var image = document.getElementById("bulbOn");

//   if (image.src.match("images/bulbon.png")) {

//     image.src = "images/bulboff.jpg";

//   }
//    else {  

//     image.src = "images/bulbon.png";
//   }
// }



// x-----------------------x



// function updateParagraph() {

//   var inputText = document.getElementById('name');

//   var result = inputText.value;

//   var inputText = document.getElementById('fathername');

//   var result2 = inputText.value;

//   var inputText = document.getElementById('subject');

//   var result3 = inputText.value;

//   var inputText = document.getElementById('marks');

//   var result4 = inputText.value;

//   var paragraph = document.getElementById('display');

//   paragraph.innerHTML = "Name: " + result + "<br>" + "Fathername: " + result2 + "<br>" + "Subject: " + result3 + "<br>"  +  "Total Marks: " + result4;
// }




// x-----------------------x


// greet = () => {
//   console.log("Good Morning") 
// }

// greet()


// x-----------------------x


// let name = "Zayan";
// let age = 20;
// console.log('My Name Is ' + name + ' and I Am ' + age + ' Years Old')
// let hello = `My Name Is ${name} and I Am ${age} Years Old`
// console.log(hello)







// let x = "Hello World!"

// console.log(x.length)
// console.log(x.toUpperCase())
// console.log(x.toLowerCase())
// console.log(x.substring(0, 11).toUpperCase())
// console.log(x.split(''))

// let y = "Technology, Computers, It, Coding"
// console.log(y.split(','))



// x-----------------------x


//  arrarys

// let fruits = new Array('pears', 'apples', 'mangoes')
// console.log(fruits)

// let fruits = ['Apples', 'Mangoes', 'Pears', 'Watermelon']
// fruits[1] = "Grapes"
// fruits.push('Oranges')
// fruits.unshift('Stawberries')
// fruits.pop()
// // console.log(Array.isArray(fruits))
// // console.log(fruits.indexOf('Grapes'))
// console.log(fruits)


// x-----------------------x


// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   hobbies: ['Sports', 'Coding', 'Movies'],
//   address: {
//     state: 'MA',
//     city: 'Boston',
//     street: "50 main st"
//   }
// }

// person.email = 'john@gmail.com';

// console.log(person.hobbies)
// console.log(person.firstName, person.lastName)
// console.log(person.hobbies[1])
// console.log(person.address.city)
// console.log(person)



// let todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false
//   }
// ]

// console.log(todos[1].text)
// let todoJSON = JSON.stringify(todos);
// console.log(todoJSON)


// x-----------------------x

// for loop

// for(let i = 0;  i <= 10; i++){

//   const x = '10';

//   const result = x * i ;

//   console.log(`For Loop Number: ${x} x ${i} = ${result}`)
// }


// While loop

// let i = 1;
// while(i <= 10){
//   console.log(`For While Number: ${i}`);
//   i++;
// }


// x-----------------------x


// function generateTable() {

//   let subjectVal = document.getElementById('subject').value;

//   let marksVal = document.getElementById('marks').value;

//   let secSubjectVal = document.getElementById('secsub').value;

//   let secMarksVal = document.getElementById('secmark').value;

//   let thirdSubjectVal = document.getElementById('thirdsub').value;

//   let thirdMarksVal = document.getElementById('thirdmark').value;

//   let tText = "Total"

//   let addMark = Number(marksVal) + Number(secMarksVal) + Number(thirdMarksVal);

//   const tableBody = document.getElementById('updateTable').getElementsByTagName('tbody')[0];

//   tableBody.innerHTML = "";

//   let row = `<tr><td>${subjectVal}</td><td>${marksVal}</td></tr><tr><td>${secSubjectVal}</td><td>${secMarksVal}</td></tr><tr><td>${thirdSubjectVal}</td><td>${thirdMarksVal}</td></tr><tr><td>${tText}</td><td>${addMark}</td></tr>`;

//   tableBody.innerHTML += row;

// }



// x-----------------------x



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





