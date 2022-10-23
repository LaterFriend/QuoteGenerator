let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {text : 'Be yourself; everyone else is already taken.',
    name : "Oscar Wilde"},
    {text : 'So many books, so little time.',
    name : 'Frank Zappa'},
    {text : 'A room without books is like a body without a soul.',
    name : 'Marcus Tullius Cicero'},
    {text : 'You only live once, but if you do it right, once is enough.',
    name : 'Mae West'},
    {text : 'Be the change that you wish to see in the world.',
    name : 'Mahatma Gandhi'}];


btn.addEventListener('click', (e) => {
    let rand = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[rand].text;
    person.innerText = quotes[rand].name;
});