/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const renderCars = (car) => {
  const card = document.createElement("div");
  const brandEl = document.createElement("h2");
  const listEl = document.createElement("ul");

  brandEl.textContent = car.brand;
  car.models.forEach((models) => {
    const modelEl = document.createElement("li");
    modelEl.textContent = models;
    listEl.append(modelEl);
  });
  card.className = "card";
  card.append(brandEl, listEl);
  const output = document.getElementById("output").append(card);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    response.forEach((car) => renderCars(car));
  })
  .catch((error) => {
    console.error(error);
  });
