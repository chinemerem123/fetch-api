const btnDog=document.getElementById("get-dog");
const btnCat=document.getElementById("get-cat");

const catResult=document.getElementById("cat");
const dogResult=document.getElementById("dog");


btnDog.addEventListener('click', getRandomDog)
btnCat.addEventListener('click', getRandomCat)

function getRandomCat(){
    fetch('http://aws.random.cat/meow')
    .then(res => res.json())
    .then(data =>{
        catResult.src=data.file;
    })
}

function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data =>{
            dogResult.src=data.url;
        
    })
}