// Write your code here!

// Make sure you remove the <main> with id 'main'
document.querySelector('main').remove()

// Make sure you create an <h1> with id 'victory' with a sweet message in it
const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.textContent = 'Mark is the champion innit'
