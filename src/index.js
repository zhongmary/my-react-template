import strReverse from '@utils';
import logo from './assets/logo128.png';
import './index.scss';

const $app = document.getElementById('app');

const strInput = 'Hello World';
const srtHolder = 'The result will be here...';
const strHtml = `
<img src="${logo}" alt="logo" />  
<h1>${strInput}</h1>  
<button id="do">Show the reverse of "${strInput}"</button>
<button id="reset">Do reset</button>
<p id="result">${srtHolder}</p>
`;

$app.innerHTML = strHtml;

const $result = document.getElementById('result');

document.getElementById('do').onclick = () => {
  $result.innerHTML = `The reverse of "${strInput}" is "${strReverse(
    strInput,
  )}"`;
};
document.getElementById('reset').onclick = () => {
  $result.innerHTML = srtHolder;
};
