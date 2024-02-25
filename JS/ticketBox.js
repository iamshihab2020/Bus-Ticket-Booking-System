// const from = document.querySelector('#from');
// const to = document.querySelector('#to');
// const time = document.querySelector("#time");
// const boarding = document.querySelector("#boarding");
// const dropPoint = document.querySelector("#drop-point");
// const classes = document.querySelector("#class");

// Function to handle ticket generation based on selected values
function ticketBox(fromId, toId, timeId, boardingId, droppingId, classId) {
    
    const from = document.querySelector(fromId).value;
    const to = document.querySelector(toId).value;
    const time = document.querySelector(timeId).value;
    const boarding = document.querySelector(boardingId).value;
    const dropping = document.querySelector(droppingId).value;
    const ticketClass = document.querySelector(classId).value;

    // Perform actions with selected values
    console.log("From:", from);
    console.log("To:", to);
    console.log("Time:", time);
    console.log("Boarding Point:", boarding);
    console.log("Dropping Point:", dropping);
    console.log("Class:", ticketClass);
    // Other actions...


    const alert = document.querySelector("#alert");
    alert.classList.remove('hidden')

}







