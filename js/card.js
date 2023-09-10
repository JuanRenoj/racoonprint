
/*export function RenderCard(data, divContainer,tipo){

    let card=document.createElement("div")
    card.className="card"
    let divfront=document.createElement("div");
    divfront.className="face divfront"
    let divback=document.createElement("div");
    divback.className="face divback"

    let nombre=document.createElement('label'); 
    let nombre2=document.createElement('label');
  
    let detalle=document.createElement('p');
    let picture=document.createElement("picture"); 
    let image=document.createElement("img"); 

    let btnEnviar=document.createElement('a');
    let icon=document.createElement("i");
    icon.className='bx bxl-whatsapp';
  
    let containlink=document.createElement("div");
    containlink.className="contain-link"
    let divnombre=document.createElement("div");
    divnombre.className="divnombre"

    nombre.innerHTML=data.nombre;
    nombre2.innerHTML=data.nombre;
    detalle.innerHTML=data.descripcion;
    image.src=data.url;
    picture.appendChild(image)
    btnEnviar.appendChild(icon)

    btnEnviar.id=`btn${tipo}`;
   // let mensaje=`https://wa.me/send?text=${tipo}: Necesito mas informacion de esta imagen:  ${data.nombre}&image=${data.url}&phone=+50247507647`
    let mensaje=`https://api.whatsapp.com/send?text=${tipo}: Necesito mas informacion de esta imagen:  ${data.nombre}&image=${data.url}&phone=+50247507647`
    btnEnviar.setAttribute("href",mensaje)

    /*let params=new URLSearchParams()
    params.append("nombre",pokemon.name)
   btnEnviar.href=`../pages/bordado.html?${params.toString()}` cerrar cometado
 
    divnombre.append(nombre)
    containlink.append(btnEnviar)
    divfront.append(picture);
    divfront.append(divnombre)
  
    divback.append(nombre2)
    divback.append(detalle)
    divback.append(containlink)
    
    card.append(divfront)
    card.append(divback)
    divContainer.appendChild(card)

}*/


export function RenderCard(data, divContainer,tipo){

    let card=document.createElement("div")
    card.className="card"
    let divImage=document.createElement("div");
    divImage.className="div-image"
    let divName=document.createElement("div");
    divName.className="div-name"

    let nombre=document.createElement('label'); 
    let price=document.createElement('label');
  
    let detalle=document.createElement('p');
 
    let image=document.createElement("img"); 

    let btnEnviar=document.createElement('a');
    let icon=document.createElement("i");
    icon.className='bx bxl-whatsapp';
  
    let divDetail=document.createElement("div");
    divDetail.className="div-detail"
    let divDesc=document.createElement("div");
    divDesc.className="div-desc"
    let divPrice=document.createElement("div");
    divPrice.className="div-price"
    let divBuy=document.createElement("div");
    divBuy.className="div-buy"

    nombre.innerHTML=data.nombre;
    price.innerHTML="Q "+ data.precio+".00";
    detalle.innerHTML=data.descripcion;
    image.src=data.url;
 
    btnEnviar.appendChild(icon)

    btnEnviar.id=`btn${tipo}`;
   // let mensaje=`https://wa.me/send?text=${tipo}: Necesito mas informacion de esta imagen:  ${data.nombre}&image=${data.url}&phone=+50247507647`
    let mensaje=`https://api.whatsapp.com/send?text=${tipo}: Necesito mas informacion de esta imagen:  ${data.nombre}&image=${data.url}&phone=+50247507647`
    btnEnviar.setAttribute("href",mensaje)

    /*let params=new URLSearchParams()
    params.append("nombre",pokemon.name)
   btnEnviar.href=`../pages/bordado.html?${params.toString()}`*/
 
 
    
    divImage.append(image);
    divName.append(nombre);
    divDesc.append(detalle);
    divPrice.append(price);
    divBuy.append(btnEnviar);

   divDetail.append(divName);
   divDetail.append(divDesc);
   divDetail.append(divPrice);
   divDetail.append(divBuy)
   card.append(divImage);
   card.append(divDetail)
  

    divContainer.appendChild(card);
   

}