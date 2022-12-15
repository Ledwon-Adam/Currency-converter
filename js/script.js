{

    const calculateResult = (choice, howMuch) => {
        switch (choice) {
            case "PLN/EUR":
                return howMuch * 0.21;
            case "PLN/USD":
                return howMuch * 0.22;
            case "PLN/GBP":
                return howMuch * 0.18;
            case "PLN/CHF":
                return howMuch * 0.21;
            case "EUR/PLN":
                return howMuch * 4.7;
            case "USD/PLN":
                return howMuch * 4.48;
            case "GBP/PLN":
                return howMuch * 5.45;
            case "CHF/PLN":
                return howMuch * 4.75;
        }
    }

    const currencyResult = (choice) => {
        switch (choice) {
            case "PLN/EUR":
                return "EUR";
            case "PLN/USD":
                return "USD";
            case "PLN/GBP":
                return "GBP";
            case "PLN/CHF":
                return "CHF";
            case "EUR/PLN":
                return "PLN";
            case "USD/PLN":
                return "PLN";
            case "GBP/PLN":
                return "PLN";
            case "CHF/PLN":
                return "PLN";
        }
    }

    const init = () => {
        const numberElement = document.querySelector(".js-recalculate");

        numberElement.addEventListener("submit", (event) => {
            event.preventDefault();
        resultCalculation();
        });
    }

    const resultCalculation = () => {
        const howMuchElement = document.querySelector(".js-howMuch");
        const choiceElement = document.querySelector(".js-choice");
        let resultElement = document.querySelector(".js-result");

        const choice = choiceElement.value;
        const howMuch = howMuchElement.value;
        const result = calculateResult(choice, howMuch)
        const waluta = currencyResult(choice)
        resultElement.innerText = `Po wymianie otrzymasz ${result.toFixed(2)} ${waluta}`;
        reset();

    }

    const reset = () => {
        let numberElement = document.querySelector(".js-recalculate");
        numberElement.addEventListener("reset", (_event) => {
            resultElement.innerText("");
        });
    }

    init();
}