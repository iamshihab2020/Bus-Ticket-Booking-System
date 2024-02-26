// Function to handle ticket generation based on selected values
function ticketBox(from, to, time, boarding, dropping, ticketClass, selectedSeats, theGrandTotal) {

    const fetchId = (id) => {
        const theId = document.querySelector(id);
        return theId
    }

    const name = fetchId("#name");
    const phone = fetchId("#phone");
    const mail = fetchId("#mail");
    const theName = fetchId("#theName");
    const thePhone = fetchId("#thePhone");
    const theMail = fetchId("#theMail");
    const route = fetchId("#route");
    const theTime = fetchId("#theTime");
    const theBoarding = fetchId("#theBoarding");
    const theDropping = fetchId("#theDropping");
    const theClass = fetchId("#theClass");
    const totalTk = fetchId("#totalTk");

    theName.innerHTML = name.value;
    thePhone.innerHTML = phone.value;
    theMail.innerHTML = mail.value;
    thePhone.innerHTML = phone.value;
    route.innerHTML = `${from} - ${to}`;
    theTime.innerHTML = time;
    theBoarding.innerHTML = boarding;
    theDropping.innerHTML = dropping;
    theClass.innerHTML = ticketClass;
    totalTk.innerHTML = theGrandTotal;

    // add bus numbers
    function updateBusNumber(location) {
        const busNumberElement = document.querySelector("#busNumber");
        if (location in data.busNumbers) {
            const busNumbersArray = data.busNumbers[location];
            const randomBusNumber = busNumbersArray[Math.floor(Math.random() * busNumbersArray.length)];
            busNumberElement.textContent = `Bus Number: ${randomBusNumber}`;
        } else {
            busNumberElement.textContent = "";
        }
    }
    updateBusNumber(from)

    //add seat to the ticket
    function seeAllSeats(selectedSeats) {
        seatListTicket.innerHTML = "";
        selectedSeats.forEach(seat => {
            const seatButton = document.createElement("button");
            seatButton.classList.add("seat-btn", "bg-gr", "text-[#fff]", "btn", "text-lg", "font-medium", "px-8");
            seatButton.textContent = seat;
            seatListTicket.appendChild(seatButton);
        });
    }
    seeAllSeats(selectedSeats);

    // shows alert after fil up ticket form
    const alert = document.querySelector("#alert");
    alert.classList.remove('hidden');
}



document.getElementById('download').addEventListener('click', function() {
    var element = document.getElementById("yourTicket");
    html2pdf().from(element).save();
});