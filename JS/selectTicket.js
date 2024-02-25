// Function to add options to select element
function addOptionsToSelect(selectId, options) {
    const selectElement = document.querySelector(selectId);
    selectElement.innerHTML = ""; // Clear existing options
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

// Function to add options to the boarding or dropping select element based on the selected location
function addBoardDropPoints(location, selectId) {
    const selectElement = document.querySelector(selectId);
    selectElement.innerHTML = ""; // Clear existing options

    if (location in data.boardingPoints) {
        addOptionsToSelect(selectId, data.boardingPoints[location]);
    } else {
        // If location not found in data, add a default option
        const defaultOption = document.createElement("option");
        defaultOption.textContent = "Pick one";
        selectElement.appendChild(defaultOption);
    }
}

// Add options to the selects and set event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    addOptionsToSelect("#from", data.locations);
    addOptionsToSelect("#to", data.locations);
    addOptionsToSelect("#time", data.boardingTimes.allTimes);
    addOptionsToSelect("#class", data.classes);

    // Event listener for changing the "from" select
    document.querySelector("#from").addEventListener("change", (event) => {
        const selectedLocation = event.target.value;
        addBoardDropPoints(selectedLocation, "#boarding");
    });

    // Event listener for changing the "to" select
    document.querySelector("#to").addEventListener("change", (event) => {
        const selectedLocation = event.target.value;
        addBoardDropPoints(selectedLocation, "#drop-point");
    });
});
