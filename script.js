script.js
const secondoFilmQuestions = [
{
question: "Qual è il titolo del secondo film di Harry Potter?",
options: [
"La Camera dei Segreti",
"Il Prigioniero di Azkaban",
"Il Calice di Fuoco",
"L'Ordine della Fenice"
],
answer: "La Camera dei Segreti"
},
{
question: "Chi è il fantasma della casa di Tassorosso?",
options: [
"Nick-Quasi-Senza-Testa",
"La Dama Grigia",
"Il Barone Sanguinario",
"Il Frate Grasso"
],
answer: "Il Frate Grasso"
},
{
question: "Chi è l'erede di Serpeverde?",
options: [
"Harry Potter",
"Tom Riddle",
"Draco Malfoy",
"Albus Silente"
],
answer: "Tom Riddle"
},
{
question: "Qual è l'animale che Harry parla nel secondo film?",
options: [
"Lupo",
"Cane",
"Basilisco",
"Drago"
],
answer: "Basilisco"
},
{
question: "Chi è il professore di Difesa contro le Arti Oscure nel secondo film?",
options: [
"Severus Piton",
"Remus Lupin",
"Gilderoy Allock",
"Alastor Moody"
],
answer: "Gilderoy Allock"
},
{
question: "Qual è il nome dell'elfo domestico che appare per la prima volta nel secondo
film?",
options: [
"Kreacher",
"Dobby",
"Winky",
"Hokey"
],
answer: "Dobby"
},
{
question: "Qual è il nome della pozione che trasforma chi la beve in qualcun altro?",
options: [
"Felix Felicis",
"Amortentia",
"Polisucco",
"Veritaserum"
],
answer: "Polisucco"
},
{
question: "Come si chiama l'albero che attacca Harry e Ron?",
options: [
"Salice Schiaffeggiante",
"Platano Picchiatore",
"Faggio Bastonatore",
"Olmo Calciatore"
],
answer: "Salice Schiaffeggiante"
},
{
question: "Chi è stato pietrificato nel secondo film?",
options: [
"Hermione Granger",
"Neville Paciock",
"Ginny Weasley",
"Luna Lovegood"
],
answer: "Hermione Granger"
},
{
question: "Qual è l'arma usata per sconfiggere il Basilisco?
options: [
"Bacchetta",
"Spada di Godric Grifondoro",
"Mantello dell'Invisibilità",
"Dente del Basilisco"
],
answer: "Spada di Godric Grifondoro"
}
];
const quintoFilmQuestions = [
{
question: "Qual è il titolo del quinto film di Harry Potter?",
options: [
"Il Calice di Fuoco",
"L'Ordine della Fenice",
"Il Principe Mezzosangue",
"I Doni della Morte"
],
answer: "L'Ordine della Fenice"
},
{
question: "Chi diventa il nuovo insegnante di Difesa contro le Arti Oscure nel quinto film?",
options: [
"Severus Piton",
"Dolores Umbridge",
"Remus Lupin",
"Alastor Moody"
],
answer: "Dolores Umbridge"
},
{
question: "Qual è il nome della squadra segreta formata da Harry per insegnare Difesa
contro le Arti Oscure?",
options: [
"L'Esercito di Grifondoro",
"L'Armata di Hogwarts",
"L'Esercito di Silente",
"L'Ordine della Fenice"
],
answer: "L'Esercito di Silente"
},
{
question: "Quale personaggio muore durante la battaglia al Ministero della Magia?",
options: [
"Sirius Black",
"Albus Silente",
"Remus Lupin",
"Arthur Weasley"
],
answer: "Sirius Black"
},
{
question: "Chi è il Direttore di Hogwarts nel quinto film?",
options: [
"Minerva McGonagall",
"Albus Silente",
"Dolores Umbridge",
"Severus Piton"
],
answer: "Albus Silente"
},
{
question: "Qual è l'incantesimo usato per convocare un Patronus?",
options: [
"Expecto Patronum",
"Expelliarmus",
"Lumos",
"Accio"
],
answer: "Expecto Patronum"
},
{
question: "Qual è la forma del Patronus di Luna Lovegood?",
options: [
"Coniglio",
"Cervo",
"Cavallo",
"Volpe"
],
answer: "Coniglio"
},
{
question: "Chi tradisce l'Esercito di Silente rivelandone l'esistenza a Dolores Umbridge?",
options: [
"Draco Malfoy",
"Pansy Parkinson",
"Cho Chang",
"Marietta Edgecombe"
],
answer: "Marietta Edgecombe"
},
{
question: "Qual è il nome della sorella di Bellatrix Lestrange?",
options: [
"Andromeda Tonks",
"Narcissa Malfoy",
"Molly Weasley",
"Petunia Dursley"
],
answer: "Narcissa Malfoy"
},
{
question: "Qual è il nome del gigante che Hagrid porta a Hogwarts nel quinto film?",
options: [
"Gornuk",
"Grawp",
"Griphook",
"Fenrir"
],
answer: "Grawp"
}
];
function loadQuiz(questions) {
const quizContainer = document.getElementById('quiz');
quizContainer.innerHTML = '';
questions.forEach((q, index) => {
const questionElement = document.createElement('div');
questionElement.classList.add('question');
const questionText = document.createElement('h2');
question