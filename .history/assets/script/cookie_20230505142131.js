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
