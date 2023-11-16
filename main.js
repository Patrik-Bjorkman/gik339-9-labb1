const button = document.getElementById('button');
const emptyDiv = document.getElementById('emptyDiv');
const colorInput = document.getElementById('color');
const contentInput = document.getElementById('content');
const divStyleCheckbox = document.getElementById('divStyle');
const checkbox = document.querySelector('input[type="checkbox"]');
const textFields = document.getElementsByClassName('textfield');

button.addEventListener(
    'click', 
    () => {
        emptyDiv.remove();
    }
);

colorInput.addEventListener(
    'input', 
    function() {
        if (divStyleCheckbox.checked) {
            emptyDiv.style.backgroundColor = colorInput.value;}
    }
);

divStyleCheckbox.addEventListener(
    'change', 
    function() {
        if (divStyleCheckbox.checked) {
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
