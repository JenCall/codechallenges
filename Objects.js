//Launchbase Bootcamp - Exercises:

// 2) Objetos e vetores. 

//a)
const user = {
    name01: "Jolie",
    company: {
        name: "Rocketseat",
    }
};

//b)
console.log(`O nome do usuário é ${user.name01} `);

const objeto = [
    {
        name: "Marie", 
        languages: "C++", 
        speciality: "Desktop"
    },
    {
        name: "John", 
        languages: "Python", 
        speciality: "Data Science"
    },
    {
        name: "Jolie", 
        languages: "JavaScript", 
        speciality: "Web/Mobile"
    } 
];
   

console.log(`O usuário ${objeto[1].name} tem 32 anos, usa a tecnologia ${objeto[1].languages} com especialidade em ${objeto[1].speciality}.`)
