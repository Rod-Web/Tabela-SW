//Mudança de valores
const ids = ["ageChris", "ageDennis", "ageSarah", "idade_karen"]; //
const idades = [19, 21, 30, 20];
let soma = 0;

for (let i = 0; i < ids.length; i++) {
    let elementos = document.getElementById(ids[i]);
    elementos.textContent = idades[i];
    console.log(elementos)
    soma += idades[i];
}

//Média
let media = (soma / ids.length).toFixed(2);
let lugarMed = document.getElementById("mediaCalculada");
lugarMed.textContent = media;


// Adição da imagem...
let PhotoSpace = document.querySelectorAll('#photos');
const Photos = [
    "./IMG/luffy.avif",
    "./IMG/zoro.jpeg",
    "./IMG/robin.jpeg",
    "./IMG/nami.jpg"
];

PhotoSpace.forEach((conteudoAtual, positionAtual) => { 
    if (positionAtual < Photos.length) {
        let image = document.createElement('img'); //adiciona a tag 'img'
        image.src = Photos[positionAtual]; // Atribui uma imagem diferente para cada elemento
        conteudoAtual.appendChild(image); // Adiciona a imagem ao elemento
    }
})



/*

// Chega na idade do Chris, muda a idade e transforma o texto em número

let idadeChris = document.getElementById('ageChris');
idadeChris.textContent = "12"; 
console.log(idadeChris);
let numeroChris = parseInt(idadeChris.textContent);

// Chega na idade do Dennis, muda a idade e transforma o texto em número

let idadeDennis = document.getElementById('ageDennis');
idadeDennis.textContent = "15";
console.log(idadeDennis);
let numeroDennis = parseInt(idadeDennis.textContent);

// Chega na idade da Sarah, muda a idade e transforma o texto em número

let idadeSarah = document.querySelector("#ageSarah");
idadeSarah.textContent = "17";
console.log(idadeSarah);
let numeroSarah = parseInt(idadeSarah.textContent);

// Chega na idade da Karen, muda a idade e transforma o texto em número
let idadeKaren = document.querySelector("#idade_karen");
idadeKaren.textContent = "12";
console.log(idadeKaren);
let numeroKaren = parseInt(idadeKaren.textContent);

// Calcula a média
let media = ((numeroKaren + numeroSarah + numeroDennis + numeroChris) / 4).toFixed(1);  // limita as casas decimais para 2;

//Coloca a média no espaço vazio
let lugarMed = document.querySelector("#mediaCalculada");
lugarMed.textContent = media;



/*

// METODO COM A ÁRVORE

// PEGA TBODY E TRS

let tbody = document.querySelector('tbody'); // Pega o tbody do html
let trs = tbody.children;  // pega todos os filhos do tbody no caso os trs
console.log(tbody);
console.log(trs);

// IDADE CHRIS POR MEIO DA ÁRVORE

let tdChris = trs[0];  // Pega o filho especifico do tbody no caso o trs[0]
let infoChris = tdChris.children;  // Pega todos os filhos do trs[0] 
let ageChris = infoChris[2];  // Pega o filho especifico do trs[0] no caso o infoChris[2] onde contem a idade
ageChris.textContent = "12";  // Muda o valor do filho do trs[0] que contém a idade para 12

console.log(tdChris);
console.log(infoChris);
console.log(ageChris);

let numeroChris = parseInt(ageChris.textContent);

// IDADE DENNIS POR MEIO DA ÁRVORE

let tdDennis = trs[1];  // Pega o filho especifico do tbody no caso o trs[1]
let infoDennis = tdDennis.children;  // Pega todos os filhos do trs[1] 
let ageDennis = infoDennis[2];  // Pega o filho especifico do trs[1] no caso o infoDennis[2] onde contem a idade
ageDennis.textContent = "15";  // Muda o valor do filho do trs[1] que contém a idade para 15

console.log(tdDennis);
console.log(infoDennis);
console.log(ageDennis);

let numeroDennis = parseInt(ageDennis.textContent);

// IDADE SARAH POR MEIO DA ÁRVORE

let tdSarah = trs[2];
let infoSarah = tdSarah.children;
let ageSarah = infoSarah[2];
ageSarah.textContent = "17";

console.log(tdSarah);
console.log(infoSarah);
console.log(ageSarah);

let numeroSarah = parseInt(ageSarah.textContent);

// IDADE KAREN POR MEIO DA ÁRVORE

let tdKaren = trs[3];
let infoKaren = tdKaren.children;
let ageKaren = infoKaren[2];
ageKaren.textContent = "12";

console.log(tdKaren);
console.log(infoKaren);
console.log(ageKaren);

let numeroKaren = parseInt(ageKaren.textContent);


// Calcula média
let media = ((numeroKaren + numeroSarah + numeroDennis + numeroChris) / 4).toFixed(1);  // limita as casas decimais para 2

// COLOCA A MÉDIA NO VALOR VAZIO

let tfoot = document.querySelector("tfoot");
let sonTfoot = tfoot.children;
let trTfood = sonTfoot[0];
let sonTrTfood = trTfood.children;
let tdVaz = sonTrTfood[1];
tdVaz.textContent = media;

console.log(tfoot);
console.log(sonTfoot);
console.log(trTfood);
console.log(sonTrTfood);
console.log(tdVaz);

*/