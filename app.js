console.log("hello world")
let screen = document.getElementById('display');
console.log(screen);
let buttons = document.querySelectorAll('button');

let inputValues = '';

for (button of buttons) {
    button.addEventListener('click', (e) => {
        btnValue = e.target.innerText;
        if (btnValue == '=') {
            rejult = eval(inputValues);
            screen.value = rejult;
            inputValues=''
        }else if(btnValue=='c'){
            inputValues='';
            screen.value = inputValues 
        }else{
            inputValues += btnValue;
            screen.value = inputValues
        }
    })

}
