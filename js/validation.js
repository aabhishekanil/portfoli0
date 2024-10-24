function validateForm() {
    // Clear any previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var isValid = true;

    // Check if name is empty
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

    // Validate email format using regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    // Check if subject is empty
    if (subject === "") {
        document.getElementById("subjectError").innerHTML = "Subject is required";
        isValid = false;
    }

    // Check if message is empty
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message is required";
        isValid = false;
    }

    // If all fields are valid, return true
    return isValid;
}
