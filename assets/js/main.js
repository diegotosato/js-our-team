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



function createCards(domEl, array) {
  for (let i = 0; i < array.length; i++) {

    //recupero tutti gli oggetti singoli dell'array
    const thisProfile = array[i];
    // console.log(thisProfile);


    //destrutturo l'oggetto e isolo tutte le sue chiavi nelle variabili
    const { name, role, email, img } = thisProfile
    // console.log(name, role, email, img);


    const cardMarkup = `
  <div class="col">

    <div class="bg-dark d-flex p-0">

      <img src="./assets/${img}" class="d-block" alt="profile_image">

      <div class="p-3 d-flex flex-column justify-content-around">
        <h4 class="card-title text-light">${name}</h4>
        <p class="card-text text-light m-0">${role}</p>
        <p class="card-text text-primary fw-bold m-0">${email}</p>
      </div>

    </div>

  </div>
  `

    domEl.innerHTML += cardMarkup

  }
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

createCards(domEl, profiles)


