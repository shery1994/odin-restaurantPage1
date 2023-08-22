//create contact page 

const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'enter address';
    form.appendChild(addressInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit'
    form.appendChild(submitButton);

    content.appendChild(pageContent);




}

export default createContactPage;