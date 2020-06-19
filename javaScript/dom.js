// single element
/*
const form = document.getElementById('my-form');
console.log(document.querySelector('.container'));

console.log(form);

//multiple element
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

for(let item of items)
{
    console.log(item);
}
const ul = document.querySelector('.items');
// ul.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].textContent = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
items[1].innerHTML = '<h3> miau </h3>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('clicKK');
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Helloo</h1>';
})
*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    
    if(nameInput.value === '' ||  emailInput === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(function(){msg.remove()}, 3000)
    }else{
      //  document.querySelector('.items').remove();
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value + ' : ' +emailInput.value));
    
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';

    }


};