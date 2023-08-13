export function RenderCard(data, divContainer,tipo){

    let card=document.createElement("div")
    card.className="card"
    let nombre=document.createElement('h4');
    nombre.className="title"
    let image=document.createElement("img"); 
    image.className="image-pokemon"
    let btnEnviar=document.createElement('a');
    btnEnviar.className="btn-primary"
    let containImage=document.createElement("div");
    containImage.className="contain-image"
   
    nombre.innerHTML=data.nombre;
    image.src=data.url;
    btnEnviar.innerHTML="Detalle";
    btnEnviar.id=`btn${tipo}`;
    btnEnviar.onclick=(e)=>data.onClick(e);

    /*let params=new URLSearchParams()
    params.append("nombre",pokemon.name)
   btnEnviar.href=`../pages/bordado.html?${params.toString()}`*/
 
    
    containImage.append(image)
    card.append(nombre)
    card.append(containImage);
    card.append(btnEnviar)
    
    divContainer.appendChild(card)

}