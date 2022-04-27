const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph')
paragraph.textContent = "Hey I'm red";
paragraph.style.color = 'red'

container.appendChild(paragraph)

// 2. an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement('h3');
h3.classList.add('h3')
h3.textContent = "I'm blue";
h3.style.color = 'blue'

container.appendChild(h3)

/* a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const containerTwo = document.createElement('div');
containerTwo.classList.add('containerTwo');
containerTwo.style.cssText = 'border: 1px solid black; background: pink;'


// h1 inside the new div

const h1 = document.createElement('h1')
h1.classList.add('h1')
h1.textContent = "I'm in a div"
containerTwo.appendChild(h1)

//
const paragraphTwo = document.createElement('p')
paragraphTwo.classList.add('paragraphTwo')
paragraphTwo.textContent = "Me too"
containerTwo.appendChild(paragraphTwo)
//
container.appendChild(containerTwo);