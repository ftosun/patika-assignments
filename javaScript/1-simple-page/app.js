// global variables
let nameInput = prompt("Lütfen adınızı yazınız", "Satoshi");
let birthDayInput = prompt("Lütfen doğum tarihinizi AA-GG-YYYY şeklinde yazınız", "01-03-2009");

let nameElement = document.querySelector("#name");
let ageElement = document.querySelector("#age");


if(!nameInput || !birthDayInput) {
    alert("Lütfen bilgilerinizi gerçerli bir biçimde giriniz!")
}
else {

    // set name imput to  the DOM
    nameElement.innerHTML = `${nameInput}`


    //calculate  age given the birthday

    let birthDayDate = new Date(birthDayInput);
    let ageDiffMs = new Date(Date.now() - birthDayDate);
    let age = ageDiffMs.getFullYear()-1970;


    // Set BirtDate to  the DOM
    
    ageElement.innerHTML =  `${age}`

}


