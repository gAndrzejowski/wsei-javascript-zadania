document.addEventListener('DOMContentLoaded', () => {
    
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const pass = document.getElementById('pass1');
    const confirmPass = document.getElementById('pass2');
    const agree = document.getElementById('agree');
    const errorField = document.querySelector('.error-message');
    const successField = document.querySelector('.success-message');

    const validateEmail = () => email.value.includes('@');
    const validateName = () => name.value.length > 6;
    const validateSurname = () => surname.value.length > 6;
    const validatePass = () => (
        pass.value.length > 0 && 
        pass.value === confirmPass.value
    );
    const validateAgree = () => agree.checked === true;
    const error = (errorMessage) => {
        errorField.innerText += `${errorMessage}
        `;
    }

    function validate() {
        let success = true;
        if (!validateEmail()) {
            error('Email musi posiadać znak @');
            success = false;
        }
        if (!validateName()) {
            error('Twoje imię jest za krótkie');
            success = false;
        }
        if (!validateSurname()) {
            error('Twoje nazwisko jest za krótkie');
            success = false;
        }
        if (!validatePass()) {
            error('Hasła nie są takie same lub puste');
            success = false;
        }
        if (!validateAgree()) {
            error('Musisz zaakceptować warunki');
            success = false;
        }
        if (success) {
            successField.innerText = "Wysyłanie udane";
            return true;
        }
        return false;
    }

    document.forms[0].addEventListener('submit', function(event){
        event.preventDefault();
        if (validate()) this.submit();
    })
})