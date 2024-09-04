document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    let currentInput = '';
    let operation = '';

    function handleButtonClick(value) {
        if (value === 'AC') {
            currentInput = '';
            result.innerText = '';
        } else if (value === 'back') {
            currentInput = currentInput.slice(0, -1);
            result.innerText = currentInput;
        } else if (value === '=') {
            try {
                result.innerText = eval(currentInput);
                currentInput = result.innerText;
            } catch {
                result.innerText = 'Error';
            }
        } else {
            currentInput += value;
            result.innerText = currentInput;
        }
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.innerText);
        });
    });
});