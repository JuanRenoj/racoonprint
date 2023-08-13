/*let params=new URLSearchParams(window.location.search)
console.log(params.get("nombre"))

document.getElementById("btnhola").addEventListener("click",e=>{
  e.preventDefault();
  goBack();
})

function goBack(){
  window.history.back()
}*/
//import { storage } from "./firebase.js";

import { RenderCard } from "./card.js";
import { getBordado } from "./firebase.js";

export function hola(e){
 alert(e.target.id)
}

var datos=[];
export async function getImageBordado(){
  const contain_image_boradado=document.getElementById("contain-image-bordado");
  const txtBuscar=document.getElementById("txtBuscar");
  txtBuscar.onkeyup=(e)=>Buscar(e)
  datos= await getBordado("Bordado");
  
  datos.forEach(element => {
    element.onClick=hola;
  RenderCard(element,contain_image_boradado,"Bordado")
  });
}

function Buscar(e){
  const contain_image_boradado=document.getElementById("contain-image-bordado");
  let text=e.target.value.toLowerCase();
  let newdatos=datos.filter((item)=>{
    return item.nombre.toLowerCase().includes(text) || item.descripcion.toLowerCase().includes(text);
  }).map((element) => {return element})

  contain_image_boradado.innerHTML="";
newdatos.forEach(item=> RenderCard(item,contain_image_boradado,"Bordado"))
}
 