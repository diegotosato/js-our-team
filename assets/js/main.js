const teamMembers = [
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


const cardMarkup = `
<div class="bg-dark mb-3 d-flex p-0">

  <img src="./assets/img/male1.png" class="d-block" alt="profile_image">

  <div class="p-3 d-flex flex-column justify-content-around">
    <h4 class="card-title text-light">Name</h4>
    <p class="card-text text-light m-0">Job</p>
    <p class="card-text text-primary fw-bold m-0">Mail</p>
  </div>
  
</div>
`