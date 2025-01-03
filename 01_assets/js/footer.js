$(document).ready(function(){
    $("#contactForm").on("submit", function(event){
        event.preventDefault();
        // Add your form submission logic here
        alert("Form submitted!");
    });
});
