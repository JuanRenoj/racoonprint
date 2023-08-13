import { getImageBordado } from "./bordado.js";
import { getAllDocument } from "./firebase.js";
import { getPokemon } from "./inicio.js";
import { getImageSublimacion } from "./sublimacion.js";


const titlePage="Racoon print";


document.addEventListener("click",e=>{
    const {target}=e;
    if(!target.matches("ul li a")){
        return;
    }
    e.preventDefault();
   
    urlRoute(e);
})

const Rutas={
    404:{
        template:"../pages/404.html",
        title:"404 | "+titlePage,
        description:"Este es la pagina de error"
    },
    "/":{
        template:"../pages/nosotros.html",
        title:"nosotros | "+titlePage,
        description:"Este es la pagina de nosotros"
    },
    "/bordado":{
        template:"../pages/bordado.html",
        title:"bordado | "+titlePage,
        description:"Este es la pagina de bordado"
    },
    "/sublimacion":{
        template:"../pages/sublimacion.html",
        title:"sublimacaion | "+titlePage,
        description:"Este es la pagina de sublimacion"
    },
    "/impresion":{
        template:"´../pages/impresion.html",
        title:"impresion | "+titlePage,
        description:"Este es la pagina de impresion"
    },
    "/contacto":{
        template:"../pages/contactos.html",
        title:"contactos | "+titlePage,
        description:"Este es la pagina de contactos"
    }

};

const urlRoute=(event)=>{
event = event ;
event.preventDefault();
window.history.pushState({}, "", event.target.href);
urlLocattionHandler();
}

const urlLocattionHandler= async()=>{
    var location=window.location.pathname;
    if(location.length == 0){
        location("../")
    }
    const route =Rutas[location] || Rutas["404"];
console.log(window.location.origin)
    const html=await fetch(route.template).then((response)=>response.text());
    document.getElementById("center").innerHTML=html;
    document.scripts;
    document.title=route.title
    document.querySelector('meta[name="description"]').setAttribute("content",route.description);
    executeFunction(location)
};


window.onpopstate=urlLocattionHandler;

window.route=urlRoute;
urlLocattionHandler();

function executeFunction(opcion){
switch(opcion){
    case "/bordado":
        getImageBordado();
        break;
    case "/sublimacion":
        getImageSublimacion();
        break;
        default :
        break;
}
}


document.getElementById("icon-menu-open").addEventListener("click",e=>{
openMenu()
});
document.getElementById("icon-menu-close").addEventListener("click",e=>{
    openMenu()
    });
    
function openMenu(){
console.log("open menu")
        let menu=document.getElementById("contain-menu");
//        console.log(menu)
        menu.classList.toggle("close")
        menu.classList.toggle("open")
    
}

function minWidthscreen(x){
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
x.addEventListener("change",minWidthscreen)



  
  