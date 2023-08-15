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



var datos=[];
const contain_image_impresion=document.getElementById("contain-image-impresion");
const tipo = "Impresion";
getImageBordado();
export async function getImageBordado(){
  //const contain_image_boradado=document.getElementById("contain-image-bordad");
 // const txtBuscar=document.getElementById("txtBuscar");
  //txtBuscar.onkeyup=(e)=>Buscar(e)
  datos= await getBordado(tipo);
  
  datos.forEach(element => {
    element.onClick=hola;
  RenderCard(element,contain_image_impresion,tipo)
  });
}

const  Buscar=(e)=>{
 // const contain_image_boradado=document.getElementById("contain-image-bordado");
  let text=e.target.value.toLowerCase();
  let newdatos=datos.filter((item)=>{
    return item.nombre.toLowerCase().includes(text) || item.descripcion.toLowerCase().includes(text);
  }).map((element) => {return element})

  contain_image_impresion.innerHTML="";
newdatos.forEach(item=> RenderCard(item,contain_image_impresion,tipo))
}

document.getElementById("txtBuscar").addEventListener("keyup",(e)=>{
Buscar(e)
}
)


function hola(e){
  alert(e.target.id)
}