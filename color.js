document.addEventListener("DOMContentLoaded", function() {
    // Array of fortunes
    const fortunes = [
        "The best way to predict the future is to create it.",
        "Don't count the days, make the days count.",
        "Believe you can and you're halfway there.",
        "The only limit to our realization of tomorrow will be our doubts of today."
    ];

    const color = ['red','blue','green','yellow']

    // Get elements
    const quoteBox = document.getElementById("quote-box");
    const quoteText = document.getElementById("quote-text");

    // Function to display a random quote
    function displayRandomQuote(text) {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        quoteText.textContent = fortunes[randomIndex];
        if(text==='random'){
            changeColors(color[randomIndex])
        }
    }

    // Function to change colors
    function changeColors(color) {
        quoteBox.style.color = color;
        quoteBox.style.borderColor = 'green';
        if(color==='yellow'){
            quoteBox.style.backgroundColor = '#cb9c4b';
            quoteBox.style.borderColor = 'green';
        }
        else if(color==='red'){
            quoteBox.style.backgroundColor ='#93c5fd';
            quoteBox.style.borderColor = 'blue';
        }
        else if(color==='blue'){
            quoteBox.style.backgroundColor ='#fff1f2';
            quoteBox.style.borderColor = 'red';
        }
        else if(color==='green'){
            quoteBox.style.backgroundColor ='#e0e7ff';
            quoteBox.style.borderColor = 'blue';
        }
        
    }
    
    displayRandomQuote('random');

    // Event listener for color buttons
    document.getElementById("color-buttons").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            changeColors(event.target.textContent.toLowerCase());
            displayRandomQuote('button');
        }
    });
});
