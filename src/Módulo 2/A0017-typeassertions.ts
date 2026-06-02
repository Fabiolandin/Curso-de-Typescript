//Type Assertions - o typescript ta o tempo todo chegando os tipos do código por isso é preciso tipar certo

//condicional
const body1 = document.querySelector('body');
if(body1) body1.style.background = 'red';

//type assertion
const body = document.querySelector('body') as HTMLBodyElement;
body.style.background = 'red';