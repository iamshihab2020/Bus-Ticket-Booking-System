const classOptions = document.querySelector("#class");

classOptions.addEventListener('change', () => {
    const non_ac = document.querySelector("#non_ac");
    const ac = document.querySelector("#ac");
    const seatCounts = document.querySelector("#seatCounts");

    if (classOptions.value === "AC") {
        ac.classList.remove('hidden');
        seatCounts.classList.remove("hidden");
        non_ac.classList.add('hidden');
    } else {
        ac.classList.add("hidden");
        seatCounts.classList.remove("hidden");
        non_ac.classList.remove("hidden");
    }
});