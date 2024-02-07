let basket = JSON.parse(localStorage.getItem("data")) || [];
const form = document.getElementById('form');
const fullName = document.getElementById('name'); //required verification
const email = document.getElementById('email'); //required, regex email verification
const address = document.getElementById('address'); //required verification
const city = document.getElementById('city'); //required verification
const country = document.getElementById('country'); //required verification
const zipCode = document.getElementById('zip-code'); //required verification
const cardHolderName = document.getElementById('card-holder-name'); // required verification
const cardNumber = document.getElementById('card-number'); // required, length verification
const expMonth = document.getElementById('exp-month'); //required verification
const expYear = document.getElementById('exp-year'); //required, length verification
const CVVCode = document.getElementById('cvv-code'); // required, length verification



form.addEventListener('submit', e => {
    validateInputs();
    if(isFormValid() == true){
        form.submit();
    } else {
        e.preventDefault();
    }
});

const isFormValid = () => {
    const inputContainers = form.querySelectorAll('.input-field');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const countryValue = country.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const cardHolderNameValue = cardHolderName.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const expMonthValue = expMonth.value.trim();
    const expYearValue = expYear.value.trim();
    const CVVCodeValue = CVVCode.value.trim();


    if(fullNameValue === '') {
        setError(fullName, 'Name is required');
    } else {
        setSuccess(fullName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    if(cityValue === '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }

    if(countryValue === '') {
        setError(country, 'Country is required');
    } else {
        setSuccess(country);
    }

    if(zipCodeValue === '') {
        setError(zipCode, 'Zip Code required');
    } else if(typeof zipCodeValue === 'number') {
        setError(zipCode, 'Provide a valid Zip Code')
    } else {
        setSuccess(zipCode);
    }

    if(cardHolderNameValue === '') {
        setError(cardHolderName, 'Card holder name required');
    } else {
        setSuccess(cardHolderName);
    }

    if(cardNumberValue === '') {
        setError(cardNumber, 'Card number required');
    } else if (cardNumberValue.length < 16) {
        setError(cardNumber, 'Provide a valid credit card number')
    } else {
        setSuccess(cardNumber);
    }

    if(expMonthValue === '') {
        setError(expMonth, 'Expiration month required');
    } else {
        setSuccess(expMonth);
    }

    if(expYearValue === '') {
        setError(expYear, 'Expiration year required');
    } else {
        setSuccess(expYear);
    }

    if(CVVCodeValue === '') {
        setError(CVVCode, 'CVV Code is required');
    } else if (CVVCodeValue.length !== 3) {
        setError(CVVCode, 'Provide a valid CVV Code')
    } else {
        setSuccess(CVVCode);
    }

};


