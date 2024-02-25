const couponCheck = (total, selectedSeats) => {
    const coupon = ["NEW15", "Couple 20"];
    const couponInput = document.querySelector("#couponInput");
    const couponApply = document.querySelector("#couponApply");
    let theGrandTotal = total; // Initialize the grand total with the total amount

    if (selectedSeats.length === 4) {
        const applyCoupon = (event) => {
            const inputValue = event.target.value;
            if (inputValue === coupon[0] || inputValue === coupon[1]) {
                couponApply.classList.remove("btn-disabled");
                const applyCouponClick = () => {
                    const couponBody = document.querySelector("#couponBody");
                    const grandTotal = document.querySelector("#grandTotal");
                    couponBody.classList.add('hidden');
                    if (inputValue === coupon[0]) {
                        grandTotal.innerHTML = `BDT ${(theGrandTotal = total - (total * 15) / 100)}`;
                    } else {
                        grandTotal.innerHTML = `BDT ${(theGrandTotal = total - (total * 20 / 100))}`;
                    }
                    couponApply.removeEventListener('click', applyCouponClick);
                };
                couponApply.addEventListener('click', applyCouponClick);
            } else {
                couponApply.classList.add("btn-disabled");
            }
        };
        couponInput.addEventListener("input", applyCoupon);
    } else {
        // If no coupon applied, keep the grand total as the original total
        theGrandTotal = total;
    }

    // Event listener for generating ticket
    const generateTicketClick = () => {
        const tickBox = document.getElementById("tickBox");
        tickBox.classList.remove('hidden')
        const from = document.querySelector("#from").value;
        const to = document.querySelector("#to").value;
        const time = document.querySelector("#time").value;
        const boarding = document.querySelector("#boarding").value;
        const dropping = document.querySelector("#drop-point").value;
        const ticketClass = document.querySelector("#class").value;
        ticketBox(from, to, time, boarding, dropping, ticketClass, selectedSeats, theGrandTotal);
        document.querySelector(".generateTicket").removeEventListener('click', generateTicketClick);
    };
    document.querySelector(".generateTicket").addEventListener("click", generateTicketClick);
};
