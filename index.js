

const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        // console.log(isFirstValue)  //--> false
        // console.log(isSecondValue) //--> false
        // console.log(resultValue) //--> 0
        // console.log(atr)         //--> numbers we click
        if (isFirstValue === false) {
            getFirstValue(atr)
        }
        if (isSecondValue === false) {
            getSecondValue(atr)
        }
    })
}

function getFirstValue(e1) {
    result.innerHTML = "";
    firstValue += e1;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
    // console.log(result.innerHTML = firstValue)
    console.log("connected getFirstValue")
}

function getSecondValue(e1) {
    if (firstValue != "" && sign != "") {
        secondValue += e1;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
        // console.log(result.innerHTML = secondValue)
        console.log("connected getSecondValue")
    }
}

function getSign() {
    console.log("connected getSign")
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
    console.log("getSignloop end")
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";

    if (sign === "+") {
        resultValue = firstValue + secondValue;
    }
    else if (sign === "-") {
        resultValue = firstValue - secondValue;
    }
    else if (sign === "x") {
        resultValue = firstValue * secondValue;
    }
    else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkresultlength();
})

function checkresultlength() {
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = " ";
    isFirstValue = false;
    secondValue = " ";
    isSecondValue = false;
    sign = " ";
    resultValue = 0;
})



// //******************Audio Functions***********************



// let screen = document.getElementById('result span');
// let buttons = document.querySelectorAll('button');
// let screenvalue = " ";


// for (items of buttons) {
//     items.addEventListener('click', (e) => {
//         buttontext = e.target.innerText;
//         console.log('Button text is ', buttontext);


//         if (buttontext == "=") {
//             speak("equals to");
//         }
//         else if (buttontext == "=") {
//             screen.value = eval(screenvalue);
//             if(screen.value > 0) {
//                 speak(screen.value);
//             }
//             else {
//                 speak(screen.value)
//             }
//         }
//         else if (buttontext == 'x') {
//             buttontext = '*';
//             speak("multiplied")
//             screenvalue += buttontext;
//             screen.value = screenvalue;
//         }
//         else if (buttontext == '/') {
//             buttontext = '/';
//             speak("Divide")
//             screenvalue += buttontext;
//             screen.value = screenvalue;
//         }
//         else if (buttontext == '.') {
//             //    buttontext='/';
//             speak("dot")
//             screenvalue += buttontext;
//             screen.value = screenvalue;
//         }
//         else if (buttontext == "AC") {
//             screenvalue = "";
//             speak("clear")
//             screen.value = screenvalue;
//         }
//         else if (buttontext == "-") {
//             speak("minus");
//             screenvalue += buttontext;
//             screen.value = screenvalue;
//         }
//         else {
//             screenvalue += buttontext;
//             speak(buttontext)
//             screen.value = screenvalue;
//         }
//     })

// }


// function speak(x) {
//     let speech = new SpeechSynthesisUtterance();
//     speech.lang = "en-US";

//     speech.text = x;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;

//     window.speechSynthesis.speak(speech);
// }          
