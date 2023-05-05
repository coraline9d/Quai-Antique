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
// Vérifier si l'utilisateur a déjà fait un choix
if (!document.cookie.includes("accept_cookies")) {
  // Afficher la bannière de cookies
  document.getElementById("cookie-banner").style.display = "block";
}

// Gérer le clic sur le bouton "Accepter"
document.getElementById("accept-cookies").addEventListener("click", () => {
  // L'utilisateur a accepté les cookies
  document.cookie =
    "accept_cookies=true; expires=" +
    new Date(Date.now() + 86400000).toUTCString() +
    "; path=/";

  // Masquer la bannière de cookies
  document.getElementById("cookie-banner").style.display = "none";
});

// Gérer le clic sur le bouton "Refuser"
document.getElementById("refuse-cookies").addEventListener("click", () => {
  // L'utilisateur a refusé les cookies
  document.cookie =
    "accept_cookies=false; expires=" +
    new Date(Date.now() + 86400000).toUTCString() +
    "; path=/";

  // Masquer la bannière de cookies
  document.getElementById("cookie-banner").style.display = "none";
});
