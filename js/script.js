{
    const welcome = () => {
        console.log("Cześć!");
    }

    const calculateResult = (cash, exchangeRate, direction) => {
        switch (direction) {
            case "fromPLN":
                return result = (cash * exchangeRate);
            case "toPLN":
                return result = (cash / exchangeRate);
        }
    }

    const updateResultText = (cash, result, direction, currency) => {
        const resultElement = document.querySelector(".js-result");
        switch (direction) {
            case "fromPLN":
                return resultElement.innerText = `${cash} PLN = ${result.toFixed(2)} ${currency}`;

            case "toPLN":
                return resultElement.innerText = `${cash} ${currency} = ${result.toFixed(2)} PLN`;
        }
    }

    const updateCurrencyText = (currency) => {
        const formDirectionFromPlnTextElement = document.querySelector(".js-directionFromPlnText");
        const formDirectionToPlnTextElement = document.querySelector(".js-directionToPlnText");
        const exchangeRateTextElement = document.querySelector(".js-exchangeRateText");
        const cashTextElement = document.querySelector(".js-cashText");
        switch (currency) {
            case "EUR":
                formDirectionFromPlnTextElement.innerText = `PLN => EUR`;
                formDirectionToPlnTextElement.innerText = `EUR => PLN`;
                exchangeRateTextElement.innerText = `kurs EUR:`;
                if (direction === "fromPLN") {
                    cashTextElement.innerText = `Podaj kwotę PLN`;
                } else {
                    cashTextElement.innerText = `Podaj kwotę EUR`;
                }
                return;
            case "USD":
                formDirectionFromPlnTextElement.innerText = `PLN => USD`;
                formDirectionToPlnTextElement.innerText = `USD => PLN`;
                exchangeRateTextElement.innerText = `kurs USD:`;
                if (direction === "toPLN") {
                    cashTextElement.innerText = `Podaj kwotę USD`;
                } else {
                    cashTextElement.innerText = `Podaj kwotę PLN`;
                }
                return;
        }
    }

    const onFormSubmit = () => {
        const cashElement = document.querySelector(".js-cash");
        const exchangeRateElement = document.querySelector(".js-exchangeRate");
        const formCurrencyElement = document.querySelector(".js-currencyEUR");
        const formDirectionFromPlnElement = document.querySelector(".js-directionFromPLN");

        const cash = cashElement.value;
        const exchangeRate = exchangeRateElement.value;

        if (formCurrencyElement.checked === true) {
            currency = "EUR";
        } else {
            currency = "USD";
        }

        if (formDirectionFromPlnElement.checked === true) {
            direction = "fromPLN";
        } else {
            direction = "toPLN";
        }

        updateCurrencyText(currency);
        calculateResult(cash, exchangeRate, direction);
        updateResultText(cash, result, direction, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", onFormSubmit);
    }

    welcome();
    init();
}