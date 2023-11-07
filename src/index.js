console.log("Connected")
// 1. use fetch (get) to pull all cars from API and display them
// 1.a fetch all the cars
// 1.b iterate over the cars
// 1.c insert into the html to display

const garage = "matosinhos"
const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`
fetch(url)
.then(response => response.json())
.then((data)=>{
  console.log(data)
  data.forEach(car=>
    insertCarCard(car))
})
const insertCarCard = (car)=>{
  const carCard = `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/300/300/${car.brand}">
    </div>
    <div class="car-info">
      <h4>${car.brand} - ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`
  const carList = document.querySelector(".cars-list")
  carList.insertAdjacentHTML("beforeend", carCard)
}


const insertCar = (event) => {
  //prevent default
  event.preventDefault();
  // values
  const brand = document.querySelector('input[name="brand"]').value
  const model = document.querySelector('input[name="model"]').value
  const plate = document.querySelector('input[name="plate"]').value
  const owner = document.querySelector('input[name="owner"]').value
  // fetch parameters
  const requestDetails = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "brand": brand,
      "model": model,
      "owner": owner,
      "plate": plate
    })
  }
  // actual fetch
  fetch(url, requestDetails)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    insertCarCard(data);
  })
}

// insert a car into the API
//1. Select the variables
const carForm = document.querySelector(".car-form");
//2. event listener for submit
carForm.addEventListener("submit",insertCar)
//3. fetch request



