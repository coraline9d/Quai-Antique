//Method for date and capacity of people booking form

document.addEventListener("DOMContentLoaded", () => {
  // Select the fields "Number of people", "Reservation time" and "Date"
  const numberOfGuestsField = document.querySelector(
    "#reservation_number_of_guest"
  );
  const hourField = document.querySelector("#reservation_hour");
  const dateField = document.querySelector("#reservation_date");

  // Create a function to update schedules
  function updateHours() {
    // Retrieve the value of the "Number of people" field
    const numberOfGuests = numberOfGuestsField.value;

    // Retrieve the value of the "Date" field
    const date = dateField.value;

    // Send an AJAX request to the server to retrieve the available hours
    fetch(
      `/reservation/available-hours?number_of_guest=${numberOfGuests}&date=${date}`
    )
      .then((response) => response.json())
      .then((availableHours) => {
        // Remove all options from the "Reservation time" field
        while (hourField.firstChild) {
          hourField.removeChild(hourField.firstChild);
        }

        // Add an empty option to the "Reservation time" field
        const placeholderOption = document.createElement("option");
        placeholderOption.textContent = "Choisir une heure";
        placeholderOption.value = "";
        hourField.appendChild(placeholderOption);

        // Add the available times as options for the "Booking time" field
        for (const hour of availableHours) {
          const option = document.createElement("option");
          option.textContent = hour;
          option.value = hour;
          hourField.appendChild(option);
        }
      });
  }

  // Add an event listener to detect value changes of the "Number of people" field
  numberOfGuestsField.addEventListener("change", updateHours);

  // Add an event listener to detect value changes of the "Date" field
  dateField.addEventListener("change", updateHours);
});
