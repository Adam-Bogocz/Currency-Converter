console.log("Cześć!");

{


    //   const formCurrencyElement = document.querySelector(".js-currencyEUR");
    //         const currency = formCurrencyElement.value;


    // const formDirectionElement = document.querySelector(".js-directionPLN-currency")

    const calculateResult = (cash, exchangeRate) => {

        // console.log(formCurrencyElement.checked); console.log(currency);

        // if formCurrencyElement.checked {
        //     currency = "EUR";
        //     console.log(currency);
        // }
        result = (cash * exchangeRate);

    }

    const updateResultText = (cash, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${cash} PLN = ${result.toFixed(2)} Euro`;
    }

    const onFormSubmit = () => {
        const cashElement = document.querySelector(".js-cash");
        const exchangeRateElement = document.querySelector(".js-exchangeRate");

        const cash = cashElement.value;
        const exchangeRate = exchangeRateElement.value;

        calculateResult(cash, exchangeRate);
        updateResultText(cash, result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", onFormSubmit);
    }

    init();
}