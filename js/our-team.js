// # DATI
// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg

//prendo gli elementi da html
const row = document.getElementById("row")

//creo l'array di oggetti
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];
//stampo in console nome, ruolo e img di ognuno
let items = "";
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];

    console.log(`Member name: ${teamMember.name}`);
    console.log(`Member role: ${teamMember.role}`);
    console.log(`Member img: ${teamMember.img}`);
    console.log(`------------------`);

    items += `
    <div class="col col-4 p-3">
        <img class="img-fluid" src="img/img/${teamMember.img}" alt="member photo">
        <h3>${teamMember.name}</h3>
        <p>${teamMember.role}</p>
    
    </div> 
    `

};

row.innerHTML = items;
