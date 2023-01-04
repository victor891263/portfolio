// contact form logic

// initialize emailjs sdk with public key
emailjs.init('66ecQITsSp3cRIEAd');

// function that sends email
document.querySelector('#connect form').addEventListener('submit', function (event) {
    event.preventDefault();

    // if validation fails, do not send the message
    const isError = validateForm();
    if (isError) return;

    // make button disabled while operation is running
    const submitButton = document.querySelector('#connect input[type="submit"]');
    submitButton.value = 'Sending...';
    submitButton.disabled = true;

    const statusBox = document.querySelector('#connect .status');
    statusBox.classList.remove('succeeded', 'failed');

    // these IDs from the previous steps
    emailjs.sendForm('service_cdaqthh', 'template_nak7yxt', this)
        .then(() => {
            statusBox.classList.add('succeeded');

            submitButton.value = 'Send message';
            submitButton.disabled = false;
        }, (error) => {
            statusBox.classList.add('failed');
            console.log(error);

            submitButton.value = 'Send message';
            submitButton.disabled = false;
        });
});



// contact form validation

// validate each input
function validateInput(name, min, max) {
    const element = document.getElementById(name);
    const errorElement = document.querySelector(`.error.${name}`);
    if ((element.value.length < min) || (element.value.length > max)) {
        errorElement.style.display = 'block';
        return true;
    }
    errorElement.style.display = 'none';
}

// validate the entire form
function validateForm() {
    const nameResult = validateInput('name', 1, 20);
    const emailResult = validateInput('email', 1, 50);
    const messageResult = validateInput('message', 1, 500);

    return (nameResult || emailResult || messageResult);
}



// textarea auto-expand logic

document.querySelector("#connect textarea").addEventListener("input", (e) => {
    e.target.style.height = "";
    e.target.style.height = (e.target.scrollHeight) + "px";
});