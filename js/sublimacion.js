

import { RenderCard } from "./card.js";
import { getBordado } from "./firebase.js";



var datos=[];
const tipo="Sublimacion";
getImageSublimacion();

export async function getImageSublimacion(){
  const contain_image_boradado=document.getElementById("contain-image-sublimacion");
  const txtBuscar=document.getElementById("txtBuscar");
  //txtBuscar.onkeyup=(e)=>Buscar(e)
  datos= await getBordado(tipo);
  
  datos.forEach(element => {
    element.onClick=hola;
  RenderCard(element,contain_image_boradado,tipo)
  });
}

const  Buscar=(e)=>{
  const contain_image_sublimacion=document.getElementById("contain-image-sublimacion");
  let text=e.target.value.toLowerCase();
  let newdatos=datos.filter((item)=>{
    return item.nombre.toLowerCase().includes(text) || item.descripcion.toLowerCase().includes(text);
  }).map((element) => {return element})

  contain_image_sublimacion.innerHTML="";
newdatos.forEach(item=> RenderCard(item,contain_image_sublimacion,tipo))
}

document.getElementById("txtBuscar").addEventListener("keyup",(e)=>{
Buscar(e)
}
)


function hola(e){
  alert(e.target.id)
}