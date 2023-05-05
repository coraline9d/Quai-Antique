//Méthode pour la date et la capcité de personnes formulaire de réservation

document.addEventListener("DOMContentLoaded", () => {
  // Votre code JavaScript existant ici

  // Sélectionnez les champs "Nombre de personnes", "Heure de la réservation" et "Date"
  const numberOfGuestsField = document.querySelector(
    "#reservation_number_of_guest"
  );
  const hourField = document.querySelector("#reservation_hour");
  const dateField = document.querySelector("#reservation_date");

  // Créez une fonction pour mettre à jour les horaires
  function updateHours() {
    // Récupérez la valeur du champ "Nombre de personnes"
    const numberOfGuests = numberOfGuestsField.value;

    // Récupérez la valeur du champ "Date"
    const date = dateField.value;

    // Envoyez une requête AJAX au serveur pour récupérer les heures disponibles
    fetch(
      `/reservation/available-hours?number_of_guest=${numberOfGuests}&date=${date}`
    )
      .then((response) => response.json())
      .then((availableHours) => {
        // Supprimez toutes les options du champ "Heure de la réservation"
        while (hourField.firstChild) {
          hourField.removeChild(hourField.firstChild);
        }

        // Ajoutez une option vide au champ "Heure de la réservation"
        const placeholderOption = document.createElement("option");
        placeholderOption.textContent = "Choisir une heure";
        placeholderOption.value = "";
        hourField.appendChild(placeholderOption);

        // Ajoutez les heures disponibles en tant qu'options du champ "Heure de la réservation"
        for (const hour of availableHours) {
          const option = document.createElement("option");
          option.textContent = hour;
          option.value = hour;
          hourField.appendChild(option);
        }
      });
  }

  // Ajoutez un écouteur d'événements pour détecter les changements de valeur du champ "Nombre de personnes"
  numberOfGuestsField.addEventListener("change", updateHours);

  // Ajoutez un écouteur d'événements pour détecter les changements de valeur du champ "Date"
  dateField.addEventListener("change", updateHours);
});

//Methode pour les cookies
document.addEventListener("DOMContentLoaded", () => {
  const timestamp = getCookie("timestamp");
  if (timestamp && Date.now() - timestamp > 24 * 60 * 60 * 1000) {
    // Show the cookie banner as an alert
    if (
      confirm(
        "We use cookies to improve your experience. Do you accept our use of cookies?"
      )
    ) {
      // User accepted cookies
      fetch("/path/to/controller/action", {
        method: "POST",
      });
    } else {
      // User declined cookies
      // Add your code here to handle the case where the user declines cookies
    }
  }
});

document.querySelector(".accept-cookies").addEventListener("click", () => {
  fetch("/path/to/controller/action", {
    method: "POST",
  }).then(() => {
    // Hide the cookie banner
    document.querySelector(".cookie-banner").style.display = "none";
  });
});

document.querySelector(".decline-cookies").addEventListener("click", () => {
  // Hide the cookie banner
  document.querySelector(".cookie-banner").style.display = "none";
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
