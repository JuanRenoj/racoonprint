

import { RenderCard } from "./card.js";
import { getBordado } from "./firebase.js";



var datos=[];
const tipo="Sublimacion";
const contain_image_sublimacion=document.getElementById("contain-image-sublimacion");
const txtBuscar=document.getElementById("txtBuscar");
getImageSublimacion();

export async function getImageSublimacion(){
  datos= await getBordado(tipo);  
  datos.forEach(element => {
    element.onClick=hola;
  RenderCard(element,contain_image_sublimacion,tipo)
  });
}

const  Buscar=(text)=>{
  let newdatos=datos.filter((item)=>{
    return item.nombre.toLowerCase().includes(text) || item.descripcion.toLowerCase().includes(text);
  }).map((element) => {return element})
  contain_image_sublimacion.innerHTML="";
newdatos.forEach(item=> RenderCard(item,contain_image_sublimacion,tipo))
}

txtBuscar.addEventListener("keyup",(e)=>{
  
Buscar(e.target.value.toLowerCase())
}
)

document.getElementById("icon-delete").addEventListener("click",()=>{
 txtBuscar.value=""
Buscar("")
})

function hola(e){
  alert(e.target.id)
}