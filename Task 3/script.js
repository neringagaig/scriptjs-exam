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

const ENDPOINT = "https://api.github.com/users";

const submitButton = document.getElementById("btn");

const renderCard = (user) => {
  const { login, avatar_url } = user;
  const card = document.createElement("div");
  const titleEl = document.createElement("h3");
  const avatarImg = document.createElement("img");

  titleEl.textContent = login;
  avatarImg.src = avatar_url;

  card.className = "card";
  card.append(avatarImg, titleEl);

  const output = document.getElementById("output").append(card);
  document.getElementById("message").textContent = "";

  return output;
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      response.forEach((user) => renderCard(user));
    })
    .catch((error) => {
      console.error(error);
    });
});
