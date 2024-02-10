function calculateStatistics() {
    // Get user input
    const numberInput = document.getElementById("numberInput").value;

    // Convert input string to an array of numbers
    const numbers = numberInput.split(",").map(Number);

    // Check if the input contains valid numbers
    if (numbers.some(isNaN)) {
        alert("Invalid input. Please enter a valid series of numbers separated by commas.");
        return;
    }

    // Calculate statistics
    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const reversedNumbers = numbers.slice().reverse();

    // Display the results
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `
        <p>Max: ${maxNumber}</p>
        <p>Min: ${minNumber}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${average.toFixed(2)}</p>
        <p>Reverse Order: ${reversedNumbers.join(", ")}</p>
    `;
}