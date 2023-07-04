const users = [
  {
    name: "brayan stiven",
    age: 23,
    ocuation: "dev",
    perfil: `Desarrollador Full Stack Web con 3 años de experiencia. Apasionado por la programación, domina el front-end y el back-end. Adora los gatos y disfruta aprender sobre su comportamiento. También es entusiasta de la observación del cielo, fascinado por las estrellas y el universo. Busca oportunidades para crecer y crear soluciones innovadoras.`,
    hobbies: ["learn", "read", "eat", "run"],
  },
  {
    name: "Edwar",
    age: 33,
    ocuation: "Dev in progress",
    perfil: `Estudiante promedio y canson`,
    hobbies: ["ya no es ella", "soy yo", "XD", "A gozar"],
  },
  {
    name: "Carlos",
    age: 25,
    ocuation: "Web fullstack develpment",
    perfil: `Dev Junior`,
    hobbies: ["code", "football", "videogame", "exercises"],
  },
  {
    name: "Gustavo Alberto Molano Ruiz",
    age: 54,
    ocuation: "FrontEnd Developer",
    perfil: `Me gusta mucho desarrollar aplicaciones en FrontEnd y además de eso disfruto viajar y conducir motos`,
    hobbies: ["motos", "cine", "cocinar", "viajar"],
  },
  {
    name: "Juan",
    age: 60,
    ocuation: "tradef",
    perfil: `comerciante profesional en el intercambio de bienes electronicos`,
    hobbies: [
      "jugar fornai",
      "ver cómo BTC se cae",
      "ir a comer hamburguesas",
      "juzgar a la gente ",
    ],
  },
  {
    name: "Danilo-COONUX",
    age: 25,
    ocuation: "Estudiante",
    perfil: "desempleado",
    hobbies: ["p", "g", "l", "programador"],
  },
  {
    name: "Angel Nieto",
    age: 29,
    ocuation: "Maestro Matematicas",
    perfil: `desarrollador de HTML`,
    hobbies: ["CSS", "JavaScript", "matematicas", "ver Naruto sin relleno"],
  },
  {
    name: "Martin",
    age: 18,
    ocuation: "Ex professional e-sports player",
    perfil: `Estudiante decidido pero lento `,
    hobbies: ["Videojuegos", "Boxeo", "Gym", "Boxeo x2"],
  },
  {
    name: "Juan",
    age: 27,
    ocupation: "Dev ",
    perfil: "Estudiante",
    hobbies: ["correr", "tomar", "leer", "raves"],
  },
  {
    name: "Kevin Polo",
    age: 19,
    ocuation: "amo de la silla",
    perfil: `quiere trabajar por dinero`,
    hobbies: ["ejercicio", "programacion", "dibujo", "cocina"],
  },
  {
    name: "Juan carlos",
    age: 38,
    ocuation: "Ingeniero Mecanico",
    perfil:
      "Me gusta aprender a programar en diferentes tipos de lenguajes, realizar viajes, manejar autos .... ",
    hobbies: ["futbol", "musica", "baile", ""],
  },
];

const buttonsHTML = document.querySelector(".buttons");
const listHTML = document.querySelector(".list");

function drawUsers(array) {
  let html = "";
  for (const { name, age, ocuation, perfil, hobbies } of array) {
    html += `<div class="list__user">
                 <h2>${name}</h2>
                 <p>${age}</p>
                 <p>${ocuation}</p>
                 <p>${perfil}</p>
                 <p>${drawHobbies(hobbies)}</p>
        </div>`;

    listHTML.innerHTML = html;
  }
}

function drawHobbies(hobbies) {
  let arrHobbies = "";
  for (const hobby of hobbies) {
    arrHobbies += `<li>${hobby}</li>`;
  }

  return arrHobbies;
}

buttonsHTML.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    if (e.target.id === "btnAZ") {
      let arrayAZ = structuredClone(users).sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      drawUsers(arrayAZ);
    }

    if (e.target.id === "btnZA") {
      let arrayZA = structuredClone(users).sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      drawUsers(arrayZA);
    }

    if (e.target.id === "btnAges") {
      let arrayAges = structuredClone(users).sort((a, b) => a.age - b.age);
      drawUsers(arrayAges);
    } 
    if (e.target.id === "btnOriginal") {
      drawUsers(users);
    }
  }
});

drawUsers(users);
