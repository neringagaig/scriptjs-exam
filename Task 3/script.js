/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const submitButton = document.querySelector("#btn");

const ENDPOINT = "https://api.github.com/users";

const renderCard = (user) => {
  const card = document.createElement("div");
  const titleEl = document.createElement("h3");
  const avatarUrlEl = document.createElement("h4");

  titleEl.textContent = user.login;
  avatarUrlEl.textContent = user.avatar_url;

  card.className = "card";
  card.append(titleEl, avatarUrlEl);

  document.getElementById("output").append(card);
  document.getElementById("message").textContent = "";
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((user) => renderCard(user));
  })
  .catch((error) => {
    console.error(error);
  });

submitButton.addEventListener("submit", (event) => {
  event.preventDefault();
  return renderCard;
});
