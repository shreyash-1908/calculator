## Features 📋

* **Standard Arithmetic Operations**: Perform addition ($+$), subtraction ($-$), multiplication ($*$), and division ($/$).
* **Expression Display**: The full equation is shown above the result after a calculation, providing clear context.
* **Clear and Backspace**: Easily clear the entire entry (C) or remove the last digit (←).
* **Decimal Support**: Handles floating-point numbers.
* **Responsive Design**: The interface is built with CSS Grid, making it usable on various screen sizes, from mobile devices to desktops.
* **Error Handling**: Displays an "Error" message for invalid operations (e.g., division by zero or malformed expressions).
* **Chained Calculations**: Use the result of a previous calculation as the starting point for your next one.




## Project Structure 📁


├── index.html      # The main HTML file with the calculator structure

├── style.css       # The CSS file for styling and layout

└── script.js       # The JavaScript file containing all the logic


---

## Future Improvements 💡

Potential features that could be added in the future:

* **Keyboard Support**: Allow users to input numbers and operators using their physical keyboard.
* **Calculation History**: Display a list of recent calculations.
* **Themes**: Add a toggle for light and dark mode.
* **Advanced Operations**: Implement scientific functions like square root, power, and trigonometric functions.
* **Strict Order of Operations (BODMAS/PEMDAS)**: Refactor the `eval()`-based logic to correctly handle complex expressions.
