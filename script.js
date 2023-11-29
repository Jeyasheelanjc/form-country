const fname = document.getElementById('name')
const number = document.getElementById('number')
const form = document.getElementById('form')
var result = document.getElementById('result')
var select=document.getElementById('select')
var a=0
form.addEventListener('submit', e => {
    e.preventDefault()
    validate();
    if (a == 2) {
        display();
    }
    else {
        a = 0;
    }
})



validate = () => {
    let nameValue = fname.value.trim();
    let numb = number.value.trim();

    if (nameValue === "") {
        setError(fname, 'enter the name')
    }
    else {
        setSuccess(fname)
    }

    if (numb === "") {
        setError(number, 'enter the number')
    }
    else if (numb.length !== 10) {
        setError(number, 'enter only 10 digits')
    }
    else {
        setSuccess(number)
    }
}
const setError = (input, message) => {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small')
    formcontrol.className = 'formcontrol error'
    small.innerText = message
}

const setSuccess = (input) => {
    a += 1;
    const formcontrol = input.parentElement;
    formcontrol.className = 'formcontrol success'
}

const display = () => {
    document.write("<center>")
    document.write(`<h2>Your Data</h2>` + `<br>`);
    document.write(" Name: "+fname.value+"<br>")
    document.write("Number: "+number.value+"<br>")
}
// console.log('Running');