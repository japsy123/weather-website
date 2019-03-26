console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form');
const search = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");


weatherForm.addEventListener("submit", (event)=>{
    event.preventDefault(); 
    const location = search.value;


    fetch('/weather?address=' +location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
            messageOne.textContent = data.forecast;
            messageTwo.textContent = data.location;
        }
    })
})

})

