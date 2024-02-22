const addToInvoice = (selectedSeats) => {
    const seatList = document.querySelector("#seatList");
    const totalSeats = document.querySelector("#totalSeats");
    seatList.innerHTML = '';
    selectedSeats.forEach(seatId => {
        const seatEntry = document.createElement('div');
        seatEntry.classList.add('flex', 'justify-between', 'gap-10', 'py-3');
        seatEntry.innerHTML = `
            <p class="w-24">${seatId}</p>
            <p class="w-24">Economy</p>
            <p class="w-24">550</p>
        `;
        seatList.appendChild(seatEntry);
    });
    totalSeats.innerHTML = selectedSeats.length;
    generateTotal(selectedSeats)
};


const generateTotal = (selectedSeats) => {
    const normalTotal = document.querySelector("#normalTotal");
    const grandTotal = document.querySelector("#grandTotal");
    const selectedSeatsLength = selectedSeats.length;
    let total = selectedSeatsLength * 550;
    normalTotal.innerHTML = `BDT ${total}`
    grandTotal.innerHTML = `BDT ${total}`
    couponCheck(total, selectedSeatsLength);
};