
//******************Audio Functions***********************



let screen = document.getElementById('result span');
let buttons = document.querySelectorAll('button');
let screenvalue = " ";


for (items of buttons) {
    items.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log('Button text is ', buttontext);


        // if (buttontext == "=") {
        //     speak("equals to");
        // }
        if (buttontext=="=") {
            screen.value = eval(screenvalue);
            if(screen.value > 0) {
                speak("equals to"+screen.value);
            }
            else {
                speak("equals to minus"+screen.value)
            }
        }
        else if (buttontext == 'x') {
            buttontext = '*';
            speak("multiplied")
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == '/') {
            buttontext = '/';
            speak("Divide")
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == '.') {
            //    buttontext='/';
            speak("dot")
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == "AC") {
            screenvalue = "";
            speak("clear")
            screen.value = screenvalue;
        }
        else if (buttontext == "-") {
            speak("minus");
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else {
            screenvalue += buttontext;
            speak(buttontext)
            screen.value = screenvalue;
        }
    })

}


function speak(x) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = x;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}          
