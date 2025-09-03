// Get references to the display elements and all buttons
const previousOperandElement = document.getElementById('previous-operand');
const currentOperandElement = document.getElementById('current-operand');
const buttons = document.querySelectorAll('.buttons button');

// --- State Variables ---
// Holds the string for the main display (the expression being typed)
let expression = ''; 
// A flag to check if the last action was a calculation
let calculationDone = false; 

// Function to update the display based on our variables
function updateDisplay() {
    currentOperandElement.innerText = expression || '0'; // Show '0' if expression is empty
}

// Function to handle all button clicks
function handleButtonClick(value) {
    // If a calculation was just done and the user types a number (not an operator),
    // we start a fresh calculation.
    const isOperator = ['/', '*', '-', '+'].includes(value);
    if (calculationDone && !isOperator) {
        expression = ''; // Clear the previous result
    }
    calculationDone = false; // Reset the flag on any button press

    // --- Main Logic using if/else if ---
    if (value === 'C') {
        expression = '';
        previousOperandElement.innerText = ''; // Also clear the top display
    } 
    else if (value === '←') {
        expression = expression.slice(0, -1);
    } 
    else if (value === '=') {
        if (expression === '') return; // Do nothing if there's no expression
        
        try {
            // Perform the calculation using eval()
            const result = eval(expression);

            if (!isFinite(result)) {
                previousOperandElement.innerText = expression + ' =';
                expression = 'Error';
            } else {
                // Move the successfully calculated expression to the top display
                previousOperandElement.innerText = expression + ' =';
                // The new expression for the main display is the result
                expression = result.toString();
            }
            // Set the flag to true because a calculation was just completed
            calculationDone = true; 

        } catch (error) {
            // Handle syntax errors like "5++2"
            previousOperandElement.innerText = expression + ' =';
            expression = 'Error';
            calculationDone = true;
        }
    } 
    else {
        // For any other button (numbers, operators, decimal), just add it to the string
        expression += value;
    }
    
    // Update the main display after every action
    updateDisplay();
}

// Add a 'click' event listener to every button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.innerText);
    });
});

// Initialize the display when the script loads
updateDisplay();