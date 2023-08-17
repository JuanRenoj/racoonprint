

console.log("ejecutar")

const btnTheme=document.getElementById("icon-theme");
const span_icon_theme=document.getElementById("span-icon-theme");
/*
 export async function getPokemon(){
try{
let datos = await fetch("https://pokeapi.co/api/v2/pokemon/");
let pokemon=await datos.json();
let containerCard= document.getElementById("container-card");
pokemon.results.forEach(pokemon =>{
  getInfoPokemon(pokemon.url,containerCard)
})
}catch(error){
console.log(error)
}
}

async function getInfoPokemon(pokemon,divContainer){
try{
    let datos= await fetch(pokemon);
    let newpokemon= await datos.json()
    let renderdatos={
        name:newpokemon.name,
        url:newpokemon.sprites.front_default
    }
//renderPokemon(renderdatos,divContainer)
RenderCard(renderdatos,divContainer)
}catch(error){
    console.log(error)
}
   
}
function renderPokemon(data,divContainer){
    console.log(data.name)
    let card=document.createElement("div")
    card.className="card"
    let pokename=document.createElement('h4');
    pokename.className="title"
    let image=document.createElement("img"); 
    image.className="image-pokemon"
    let btnEnviar=document.createElement('a');
    btnEnviar.className="btn-primary"
    let containImage=document.createElement("div");
    containImage.className="contain-image"
   
    pokename.innerHTML=data.name;
    image.src=data.url;
     btnEnviar.innerHTML="Ver Detalle";
    btnEnviar.id=data.name;
    btnEnviar.onclick=(e)=>onClick(e);

    /*let params=new URLSearchParams()
    params.append("nombre",pokemon.name)
   btnEnviar.href=`../pages/bordado.html?${params.toString()}`
    
    containImage.append(image)
    card.append(pokename)
    card.append(containImage);
    card.append(btnEnviar)
    
    divContainer.appendChild(card)

}



function onClick(e){
    alert("pokemon:"+e.target.id)
}
const Buscar=(e)=>{
    console.log(e.target.value)
  }*/
 
  

document.getElementById("icon-menu-open").addEventListener("click",e=>{
    openMenu()
    });
    document.getElementById("icon-menu-close").addEventListener("click",e=>{
CloseMenu();        });
        
    function openMenu(){
    console.log("open menu")
            let menu=document.getElementById("contain-menu");
    //        console.log(menu)
            menu.classList.remove("close")
            menu.classList.add("open")
        
    }
    
    function CloseMenu(){
        console.log("close menu")
                let menu=document.getElementById("contain-menu");
        //        console.log(menu) 
        menu.classList.remove("open")
                menu.classList.add("close")
               
            
        }


   /* function minWidthscreen(x){
      //  console.log(x)
      let menu=  document.getElementById("contain-menu");
        if(x.matches){
         
          menu.classList.remove("close");
          menu.classList.add("open");
          
        }else{
            menu.classList.remove("open");
            menu.classList.add("close");  
        }
    }
    var x=window.matchMedia("(min-width: 768px)")
    minWidthscreen(x);
    x.addEventListener("change",minWidthscreen)*/
    
    Notification.requestPermission().then((permission)=>{
        if(permission !== 'granted') {
            return;
        }
    });
    
const notification=new Notification("To do list",{
    body:"Unread message(2)",
    icon:"../assets/img/solologo.png",
})

function applyTheme(anterior, actual){
document.body.classList.remove(`${anterior}-theme`);
document.body.classList.add(`${actual}-theme`);
span_icon_theme.classList.remove(anterior);
span_icon_theme.classList.add(actual)
}

function SaveTheme(theme){
    window.localStorage.setItem("theme",theme);
}

btnTheme.addEventListener("click",(e)=>{
    alert("funcionado")
   ChangeTheme();
})

function ChangeTheme(){
    let theme=window.localStorage.getItem("theme");
    console.log(theme)
    if(theme !==null){
    if(theme ==="ligth"){
        applyTheme("ligth","dark")
        SaveTheme("dark")
    }else{ 
        applyTheme("dark","ligth")
        SaveTheme("ligth")
       
    }
    return
}
applyTheme("ligth","dark")
SaveTheme("dark")
}

function getTheme(){
    let theme=window.localStorage.getItem("theme");
    console.log(theme)
    if(theme !==null){
         applyTheme("ligth",theme) 
    }
  
}
getTheme();



