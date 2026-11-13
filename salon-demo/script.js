const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    document.getElementById("message").textContent =
        "Merci " + name + " ! Votre demande pour le " + date +
        " a été enregistrée.";

    form.reset();
});