let howMuchElement = document.querySelector(".js-howMuch");
let choiceElement = document.querySelector(".js-choice");
let numberElement = document.querySelector(".js-recalculate");
let resultElement = document.querySelector(".js-result");



numberElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let choice = choiceElement.value;
    let howMuch = howMuchElement.value;
    let result;
    let waluta;

    switch (choice) {
        case "PLN/EUR":
            result = howMuch * 0.21;
            waluta = "EUR";
            break;

        case "PLN/USD":
            result = howMuch * 0.22;
            waluta = "USD";
            break;

        case "PLN/GBP":
            result = howMuch * 0.18;
            waluta = "GBP";
            break;

        case "PLN/CHF":
            result = howMuch * 0.21;
            waluta = "CHF";
            break;

        case "EUR/PLN":
            result = howMuch * 4.7;
            waluta = "PLN";
            break;

        case "USD/PLN":
            result = howMuch * 4.48;
            waluta = "PLN";
            break;

        case "GBP/PLN":
            result = howMuch * 5.45;
            waluta = "PLN";
            break;

        case "CHF/PLN":
            result = howMuch * 4.75;
            waluta = "PLN";
            break;
    }

    resultElement.innerText = `Po wymianie otrzymasz ${result.toFixed(2)} ${waluta}`;

});

numberElement.addEventListener("reset", (_event) => {
    resultElement.innerText = "";
});