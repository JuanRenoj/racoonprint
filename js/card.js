
export function RenderCard(data, divContainer,tipo){

    let card=document.createElement("div")
    card.className="card"
    let divfront=document.createElement("div");
    divfront.className="divfront"
    let nombre=document.createElement('h5');
    nombre.className="title"
    let detalle=document.createElement('p');
    detalle.className="desc"
    let image=document.createElement("img"); 
    image.className="image-pokemon"
    let btnEnviar=document.createElement('a');
    let icon=document.createElement("i");
    icon.className='bx bxl-whatsapp';
    btnEnviar.className="btn-primary"
    let containImage=document.createElement("div");
    containImage.className="contain-image"
    nombre.innerHTML=data.nombre;
    detalle.innerHTML=data.descripcion;
    image.src=data.url;
    btnEnviar.appendChild(icon)

    btnEnviar.id=`btn${tipo}`;   
    btnEnviar.href=`https://wa.me/text=necesito mas informacion de esta imagen ${tipo}:${nombre}&phone=+50247507647`

    /*let params=new URLSearchParams()
    params.append("nombre",pokemon.name)
   btnEnviar.href=`../pages/bordado.html?${params.toString()}`*/
 
    
    containImage.append(image)
    divfront.append(nombre)
    divfront.append(containImage);
    divfront.append(detalle)
    divfront.append(btnEnviar)
    
    card.append(divfront)
    divContainer.appendChild(card)

}