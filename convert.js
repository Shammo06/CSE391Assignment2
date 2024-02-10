function convert() {
    // Get user input
    const weightInput = document.getElementById("weightInput").value;
    const conversionType = document.getElementById("conversionType").value;

    // Perform conversion
    let result;
    if (conversionType === "kgToLb") {
        res = kilogramsToPounds(weightInput);
        result = `${res} Pound`
    } else if (conversionType === "lbToKg") {
        res = poundsToKilograms(weightInput);
        result = `${res} KG`
    } else {
        // Handle invalid conversion type
        alert("Invalid conversion type");
        return;
    }

    // Display result
    document.getElementById("result").textContent = result;
}

function kilogramsToPounds(kilograms) {
    return (kilograms * 2.2046).toFixed(2);
}

function poundsToKilograms(pounds) {
    return (pounds * 0.4536).toFixed(2);
}
