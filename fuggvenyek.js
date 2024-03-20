import { PARFUMOK } from "./adatok.js";

export function tablazatLetrehoz(){
let txt = "<ul>"
for(let i = 0; i < PARFUMOK.length; i++){
     txt += 
     `
    <li>  ${PARFUMOK[i].nev} :
     ${PARFUMOK[i].meret} ,
     ${PARFUMOK[i].ar} </li>

     `    
}
txt += "</ul>"
console.log(txt)
return txt

}


export function hatterValtas(){
    const elemek = document.querySelectorAll(".tartalom li")
    for(let i = 0; i < elemek.length; i++){
        elemek[i].addEventListener("mouseover", function(){
            elemek[i].classList.add("kiv")

        })
    }

    for(let i = 0; i < elemek.length; i++){
        elemek[i].addEventListener("mouseout", function(){
            elemek[i].classList.remove("kiv")

        })
    }
}