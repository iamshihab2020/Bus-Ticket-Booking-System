const addToInvoice = (selectedSeats) => {
    const seatList = document.querySelector("#seatList");
    const totalSeats = document.querySelector("#totalSeats");
    seatList.innerHTML = '';
    selectedSeats.forEach(seatId => {
        const seatEntry = document.createElement('div');
        seatEntry.classList.add('flex', 'justify-between', 'gap-10', 'py-3');

        if (document.querySelector("#class").value === 'AC') {
            seatEntry.innerHTML = `
                <p class="w-24">${seatId}</p>
                <p class="w-24">AC</p>
                <p class="w-24">750</p>
            `;
        }
        else {
            seatEntry.innerHTML = `
                <p class="w-24">${seatId}</p>
                <p class="w-24">Non AC</p>
                <p class="w-24">550</p>
            `;
        }
        seatList.appendChild(seatEntry);
    });
    totalSeats.innerHTML = selectedSeats.length;
    generateTotal(selectedSeats)
};


const generateTotal = (selectedSeats) => {
    let total = 0;
    const normalTotal = document.querySelector("#normalTotal");
    const grandTotal = document.querySelector("#grandTotal");
    const selectedSeatsLength = selectedSeats.length;
    if (document.querySelector("#class").value === 'AC') {
        total = selectedSeatsLength * 750;
        
    } else {
        total = selectedSeatsLength * 550;
    }
    normalTotal.innerHTML = `BDT ${total}`
    grandTotal.innerHTML = `BDT ${total}`
    couponCheck(total, selectedSeats);
    
};


