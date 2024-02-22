const couponCheck = (total, selectedSeatsLength) => {
    const coupon = ["NEW15", "Couple 20"];
    const couponInput = document.querySelector("#couponInput");
    const couponApply = document.querySelector("#couponApply");
    if (selectedSeatsLength === 4) {
        couponInput.addEventListener("input",  (event) => {
            const inputValue = event.target.value;
            if (inputValue === coupon[0] || inputValue === coupon[1]) {
                couponApply.classList.remove("btn-disabled");
                couponApply.addEventListener('click', () => {
                    const couponBody = document.querySelector("#couponBody");
                    const grandTotal = document.querySelector("#grandTotal");
                    couponBody.classList.add('hidden')
                    if (inputValue === coupon[0]) {
                        grandTotal.innerHTML = `BDT ${total - (total * 15/100)}`;
                    } else {
                        grandTotal.innerHTML = `BDT ${total - (total * 20/100)}`;
                    }
                });
            } else {
                couponApply.classList.add("btn-disabled");
            }
        });
    }
};

