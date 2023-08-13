import { RenderCard } from "./card.js";
import { getBordado } from "./firebase.js";

export function hola(e){
 alert(e.target.id)
}

var datos, filter=[];
export async function getImageSublimacion(){
  const contain_image_boradado=document.getElementById("contain-image-bordado");
  datos= await getBordado("Sublimacion");
  console.log(datos)
  filter=datos;
  datos.forEach(element => {
    element.onClick=hola;
  RenderCard(element,contain_image_boradado,"Sublimacion")
  });
}