const age = document.getElementById("age");
const svars = document.getElementById("svars");
const garums = document.getElementById("garums");
const resultDiv = document.getElementById("result");
const kmi = document.getElementById("kmi");

function KalkulatorKMI(){
    const ageValue = parseInt(age.value);
    const svarsValue = parseInt(svars.value);
    const garumsValue = parseInt(garums.value);
    let kmiNumbers = [];
    svarsValue/garumsValue^2 == kmiNumbers[i];

    result.DivinnerHTML = kmiNumbers.join(", ");

}

kmi.addEventListener("click", KalkulatorKMI);