
export function RenderCard(data, divContainer,tipo){

    let card=document.createElement("div")
    card.className="card"
    let divfront=document.createElement("div");
    divfront.className="face divfront"
    let divback=document.createElement("div");
    divback.className="face divback"
    let nombre=document.createElement('h3');
   
    let nombre2=document.createElement('h3');
    nombre2.className="title"
    let detalle=document.createElement('p');
    detalle.className="desc"
    let image=document.createElement("img"); 
    image.className="image-card"
    let btnEnviar=document.createElement('a');
    let icon=document.createElement("i");
    icon.className='bx bxl-whatsapp';
    btnEnviar.className="btn-primary"
    let containlink=document.createElement("div");
    containlink.className="contain-link"
    nombre.innerHTML=data.nombre;
    nombre2.innerHTML=data.nombre;
    detalle.innerHTML=data.descripcion;
    image.src=data.url;
    btnEnviar.appendChild(icon)

    btnEnviar.id=`btn${tipo}`;   
    btnEnviar.href=`https://wa.me/text=necesito mas informacion de esta imagen ${tipo}:${nombre}&phone=+50247507647`

    /*let params=new URLSearchParams()
    params.append("nombre",pokemon.name)
   btnEnviar.href=`../pages/bordado.html?${params.toString()}`*/
 
    
    containlink.append(btnEnviar)
      divfront.append(image);
    divfront.append(nombre)
  
    divback.append(nombre2)
    divback.append(detalle)
    divback.append(containlink)
    
    card.append(divfront)
    card.append(divback)
    divContainer.appendChild(card)

}