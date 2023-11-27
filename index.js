function calculateInterest() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;


    if (principal === "" || rate === "" || years === "") {
        alert("Please enter all values.");
        return;
    }


let interest = (principal * rate * years) / 100;


let resultDiv = document.getElementById("result");
    resultDiv.textContent = "Interest Amount: $" + interest.toFixed(2);
}