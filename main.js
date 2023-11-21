const button = document.getElementById('button');
const emptyDiv = document.getElementById('emptyDiv');
const checkbox = document.querySelector('input[type="checkbox"]');
const textFields = document.getElementsByClassName('textfield');
 
checkbox.addEventListener(
    'change', function() {
        for (let textfield of textFields) {
            if (textfield.name === 'color') {
                emptyDiv.style.background = textfield.value;
            }
        }
    }
);

function inputHandle(e) {
    console.log(e.target);
    if (e.target.name === 'content') { 
        const contentText = e.target.value;
        emptyDiv.innerHTML = contentText; 
    }
}
for (let textfield of textFields) {
    textfield.addEventListener(
        'input', 
        inputHandle
    );
}

button.addEventListener('click', () => emptyDiv.remove());
