const button = document.getElementById('button');
const emptyDiv = document.getElementById('emptyDiv');
const colorInput = document.getElementById('color');
const contentInput = document.getElementById('content');
// const divStyleCheckbox = document.getElementById('divStyle');
const checkbox = document.querySelector('input[type="checkbox"]');
const textFields = document.getElementsByClassName('textfield');

colorInput.addEventListener(
    'input', 
    function() {
        if (checkbox.checked) {
            emptyDiv.style.backgroundColor = colorInput.value;}
    }
);

checkbox.addEventListener(
    'change', 
    function() {
        if (checkbox.checked) {
            emptyDiv.style.backgroundColor = colorInput.value;
            emptyDiv.textContent = contentInput.value;
        } else {
            emptyDiv.style.backgroundColor = '';
        }
    }
);

for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener(
        'input', 
        function(e) {
            console.log(`Input field ${e.target.name} triggered the event`);
            if (e.target.name === 'content') {
                emptyDiv.innerHTML = e.target.value;
            }
        }
    );
}

button.addEventListener('click', () => emptyDiv.remove());
