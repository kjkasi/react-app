// Template Literals

const user = 'Bob';
const num = 17;

const txt = 'Hello, ' + user + ' you have ' + num + ' letters in you inbox';
console.log(txt);

const txt1 = `Hello, ${user} you ${num} letters in your inbox` ;
console.log(txt1);

const txt2 = `Hello, ${ 2 + 2 } you ${num} letters in your inbox` ;
console.log(txt2);

const txt3 = `Now is ${ Date.now() }`;
console.log(txt3);

const html =
    '<ul>' + 
    '<li>Item One</li>' +
    '<li>Item Two</li>' +
    '</ul>';

console.log(html);

const items = ['tea', 'coffe'];

const templateHtml = `
    <ul>
    <li>${items[0]}</li>
    <li>${items[1]}<</li>
    </ul>
`;

console.log(templateHtml);