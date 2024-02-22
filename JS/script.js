const initializeSeatSelection = () => {
    const seatButtons = document.querySelectorAll(".seat-btn");
    const seatLeft = document.querySelector("#seatLeft");
    const submit = document.querySelector("#submit");

    let selectedSeats = [];

    seatButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const seatNumber = e.target.innerHTML;
            if (!selectedSeats.includes(seatNumber)) {
                if (selectedSeats.length < 4) {
                    e.target.classList.remove("bg-sectionBg", "text-seatText");
                    e.target.classList.add("bg-gr", "text-[#FFFF]");
                    selectedSeats.push(seatNumber);
                    submit.classList.remove('btn-disabled')
                } else {
                    alert("You cannot choose more than 4 seats :D");
                }
            } else {
                e.target.classList.remove("bg-gr", "text-[#FFFF]");
                e.target.classList.add("bg-sectionBg", "text-seatText");
                const index = selectedSeats.indexOf(seatNumber);
                if (index > -1) {
                    selectedSeats.splice(index, 1);
                }
            }
            // console.log("Selected seats:", selectedSeats);
            seatLeft.innerHTML = 24 - selectedSeats.length;
            addToInvoice(selectedSeats)
        });
    });
};

document.addEventListener("DOMContentLoaded", initializeSeatSelection);


