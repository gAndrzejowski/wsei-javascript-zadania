document.addEventListener('DOMContentLoaded', () => {

    const creditCardNumber = document.getElementById('name');
    const creditCardTypeField = document.getElementById('type');

    const typeRecognition = new Map([
        ["Visa", /^4/],
        ["MasterCard", /^5/],
        ["American Express", /^3[4,7]/]
    ]);

    const validityCheck = [
        /^4\d{12,15}$/,
        /^5\d{15}$/,
        /^3[4,7]\d{13}/
    ];

    function checkType() {
        let newText = "";
        for (let [type, regex] of typeRecognition) {
            if (regex.test(creditCardNumber.value)) {
                newText = type;
            }
        }
        creditCardTypeField.innerText = newText
    }

    function validate() {
        let newOutline = "none";
        for (let validRegex of validityCheck) {
            if (validRegex.test(creditCardNumber.value)) {
                newOutline = "2px solid green";
            }
        }
        creditCardNumber.style.outline = newOutline;
    }

    creditCardNumber.addEventListener('input', function() {
        checkType();
        validate();
    })

})