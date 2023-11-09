const button = document.getElementById('button'); // Retrieve the button element using the getElementById() method
const emptyDiv = document.getElementById('btn'); // Retrieve the div element using the querySelector() method
const colorInput = document.getElementById('color'); // Retrieve the input element using the getElementById() method
const contentInput = document.getElementById('content'); // Retrieve the input element using the getElementById() method
const divStyleCheckbox = document.getElementById('divStyle'); // Retrieve the input element using the getElementById() method
const checkbox = document.querySelector('input[type="checkbox"]'); // Retrieve the input element using the querySelector() method
const textFields = document.getElementsByClassName('textfield'); // Retrieve the input elements using the getElementsByClassName() method

button.addEventListener('click', function() {       // Add a click event listener to the button element
    if (emptyDiv.style.display === 'none') {        // Check if the display property of the div element is set to none
        emptyDiv.style.display = 'block';
    } else {                                        // If the display property of the div element is not set to none
        emptyDiv.style.display = 'none';
    }
});

colorInput.addEventListener('input', function() { // Add an input event listener to the input element
    if (divStyleCheckbox.checked) { // Check if the checkbox is checked
        emptyDiv.style.backgroundColor = colorInput.value; // Set the background color of the div element to the value of the input element
    }
});

divStyleCheckbox.addEventListener('change', function() { // Add a change event listener to the input element
    if (divStyleCheckbox.checked) { // Check if the checkbox is checked
        emptyDiv.classList.add('border-rounded-05');
        emptyDiv.style.backgroundColor = colorInput.value;
        emptyDiv.textContent = contentInput.value; // Set the background color of the div element to the value of the input element
    } else { // If the checkbox is not checked
        emptyDiv.classList.remove('border-rounded-05');
        emptyDiv.style.backgroundColor = '';
        emptyDiv.textContent = ''; // Set the background color of the div element to empty string
    }
});
// contentInput.addEventListener('input', function() { // Add an input event listener to the input element
//     emptyDiv.textContent = contentInput.value; // Set the text content of the div element to the value of the input element
// });
