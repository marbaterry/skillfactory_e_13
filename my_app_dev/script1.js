import css from './css/base.css';

const message = require('./script2');

alert(message);

// get data from JSONSERVER
const element = document.querySelector('header');

fetch('http://localhost:3000/posts')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data[0]['author']);
    element.textContent = (data[0].author);
  });
