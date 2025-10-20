const profiles = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


function cardMarkup(object) {
  return `
   <div class="col">

    <div class="bg-dark d-flex p-0">

      <img src="./assets/${object.img}" class="d-block" alt="profile_image">

      <div class="p-3 d-flex flex-column justify-content-around">
        <h4 class="card-title text-light">${object.name}</h4>
        <p class="card-text text-light m-0">${object.role}</p>
        <p class="card-text text-primary fw-bold m-0">${object.email}</p>
      </div>

    </div>

  </div>
  `
}


function createCards(domEl, array) {
  for (let i = 0; i < array.length; i++) {

    //recupero tutti gli oggetti singoli dell'array
    const thisProfile = array[i];

    domEl.innerHTML += cardMarkup(thisProfile)
  }
  return domEl

}


/*
PSEUDO-CODE

- array di oggetti -> FATTO
- markup da inserire in pagina -> FATTO
- isolare il nodo della dom dove voglio inserire le card
- ciclare all'interno dell'array per recuperare ogni singolo oggetto
- per ogni oggetto isolare le 4 chiavi
- nel markup sostituire le parti di riferimento con le variabili isolate (nome x nome, role x ruolo, ecc.)
*/



//isolare il nodo della dom dove voglio inserire le card
const domEl = document.querySelector('main .row')
// console.log(domEl);



const formEl = document.querySelector('form')

formEl.addEventListener('submit', (event) => {
  event.preventDefault()


  const imageField = document.getElementById('image')
  const nameField = document.getElementById('name')
  const roleField = document.getElementById('role')
  const emailField = document.getElementById('email')

  const newProfile = {
    name: nameField.value,
    role: roleField.value,
    email: emailField.value,
    img: imageField.value
  }

  profiles.push(newProfile)

  domEl.innerHTML += cardMarkup(newProfile)

})

createCards(domEl, profiles)