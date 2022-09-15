// const add = document.createElement('p');

document.getElementById('Log-in').innerHTML = 'Enter Your Log In Credentials'

let content = document.querySelector('#Log-in');
content.style.textAlign = 'center'
content.style.color = 'white'
content.style.fontSize = 'xx-large'
content.style.backgroundColor = 'brown'
content.style.margin= '3% 10% 1% 10%'
content.style.padding = '2%'

const button = document.getElementById('btn')
button.addEventListener('submit', (event)=>{
    event.preventDefault();
})