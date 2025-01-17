// Function to add internal CSS to the document
function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Style the form */
        #registrationForm {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }

        /* Style the input fields */
        #registrationForm input[type="text"],
        #registrationForm input[type="email"],
        #registrationForm input[type="password"] {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 3px;
            box-sizing: border-box;
            font-size: 16px;
        }

        /* Style the submit button */
        #registrationForm input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 16px;
        }

        /* Add hover effect to the submit button */
        #registrationForm input[type="submit"]:hover {
            background-color: #45a049;
        }
    `;
    document.head.appendChild(style);
}

// Function to create the registration form
function createRegistrationForm() {
    // Add the CSS styles
    addStyles();

    // Create a form element
    const form = document.createElement('form');
    form.setAttribute('id', 'registrationForm');
    
    // Create an input for first name
    const firstName = document.createElement('input');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('name', 'firstName');
    firstName.setAttribute('placeholder', 'First Name');
    
    // Create an input for last name
    const lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('name', 'lastName');
    lastName.setAttribute('placeholder', 'Last Name');
    
    // Create an input for email
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Email');
    
    // Create an input for password
    const password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('name', 'password');
    password.setAttribute('placeholder', 'Password');
    
    // Create a submit button
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Register');
    
    // Append inputs to the form
    form.appendChild(firstName);
    form.appendChild(lastName);
    form.appendChild(email);
    form.appendChild(password);
    form.appendChild(submitButton);
    
    // Append the form to the body
    document.body.appendChild(form);
}

// Call the function to create the form
createRegistrationForm();
