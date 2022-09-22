const langinput= document.querySelector(`#lang-input`);
console.log(langinput);

const add = document.querySelector(`#add-btn`);
console.log(add);

const dlt = document.querySelector(`#delete-btn`);
console.log(dlt);

const langlist= document.querySelector(`#lang-list`);
console.log(langlist);


const newUl= document.createElement(`ul`);
langlist.appendChild(newUl);





add.onclick=()=>{
    if(langinput.value===``){
        alert(`please enter a language`);
    }
    else {
        newUl.innerHTML+=`<li>${langinput.value}</li>`
    }
    langinput.value=``;
    langinput.focus();
}
dlt.onclick=()=>{
    newUl.childElementCount>0 ? newUl.removeChild(newUl.lastChild): alert(`There is no item to delete`);
}


window.addEventListener(`load`, ()=>{
    langinput.focus();
})