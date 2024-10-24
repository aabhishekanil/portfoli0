function sendmail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_9zrwosf", "template_e7pwimq", parms)
        .then(function(response) {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Email sent successfully!");
        }, function(error) {
            console.log("Failed to send email", error);
            alert("Failed to send email. Please try again.");
        });
}
