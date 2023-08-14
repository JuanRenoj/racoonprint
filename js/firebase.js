
/*// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
  import {
    getFirestore,
    collection,
    doc,

  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import { hola } from "./bordado.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBJac97GohvXHisfFSuDb90UU7SgwkVQB8",
    authDomain: "uploadimage-f8309.firebaseapp.com",
    projectId: "uploadimage-f8309",
    storageBucket: "uploadimage-f8309.appspot.com",
    messagingSenderId: "327642393170",
    appId: "1:327642393170:web:6a5e3c91f3540464f14d8b"
  };
// initializeApp(firebaseConfig);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);
  const storage=getStorage(app);

export async function getImageFromStorage(){
  const contain_image_boradado=document.getElementById("contain-image-bordado");
try {
  let imageRef=ref(storage,"/Bordados");
  let list=await listAll(imageRef);
  list.items.forEach((item)=>{
  getUrlImage(item,contain_image_boradado);
  })
} catch (error) {
  console.log(error)
}
}

 async function getUrlImage(item, divContainer){
let imgUrl= await getDownloadURL(item)
let data={
  name:"",
  url:imgUrl,
  onClick: hola,
 }
 RenderCard(data,divContainer)
}*/

  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import {
    getFirestore,
    collection,
    doc,
setDoc,
addDoc,
getDoc,
onSnapshot,
getDocs,
limit,
where,
orderBy,
updateDoc
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  import { RenderCard } from "./card.js";
  

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfigs = {
  apiKey: "AIzaSyDkWHAaRIHgFgnokvSpgyLFIvTfsTUFQno",
  authDomain: "racoonprint-9f247.firebaseapp.com",
  projectId: "racoonprint-9f247",
  storageBucket: "racoonprint-9f247.appspot.com",
  messagingSenderId: "94387403363",
  appId: "1:94387403363:web:dcb0b4be8903b59199d656"
};
  // Initialize Firebase
 const secondary=initializeApp(firebaseConfigs,"secondary");
  const firestore=getFirestore(secondary);
  const docBordado=doc(firestore,"Bordado/primero")
  const manualidadCollection=collection(firestore,"Manualidad")

  export async function createInfo(data, tipo){
    console.log(tipo)
    

const insert=   await addDoc(collection(firestore,`${tipo}`),data)

        console.log(insert.id);



    /*
    const insert= await setDoc(docBordado,data);
console.log("insertado "+insert.id);
    await updateDoc(insert,{
        id:insert.id
    })*/
  }


  async function getInfoOneDocument(){
    const mySnapchot=await getDoc(docBordado);
    if(mySnapchot.exists()){
      const data= mySnapchot.data();
      console.log(`mis datos son ${JSON.stringify(data)}`)
    }
  }
 
  //escuchar cambios en tiempo real
  // let dailySpecialUnsuscribe
  function changeRealTime(){
    
    //dailySpecialUnsiscribe = 
    onSnapshot(docBordado,(docSnapshot)=>{
      const data=docSnapshot.data();
      console.log(`mis datos son ${JSON.stringify(data)}`)
    })
  };
  /*
  function cancelMyListenerAtTheAppropriateTien(){
    dailySpecialUnsuscribe();
  }*/
  //changeRealTime();

  export async function  getAllDocument(tipo){
    //para un solo registro
    //const  data=query(collection(firestore,"Manualidad"),where("nombre","==","nose"),limit(10));
    const contain_image_boradado=document.getElementById("contain-image-bordado");
    const querySnapshot=await getDocs(collection(firestore,`${tipo}`));
    
    const alldocs= querySnapshot.forEach((element)=>{
     // console.log(`Document ${element.id} contiene ${JSON.stringify(element.data())}`);
      let newdatos=element.data();
      newdatos.onClick=hola;
      RenderCard(newdatos, contain_image_boradado, tipo)
    })
  }
  export async function  getBordado(tipo){
    //para un solo registro
    //const  data=query(collection(firestore,"Manualidad"),where("nombre","==","nose"),limit(10));
    let datos=[];
    const contain_image_boradado=document.getElementById("contain-image-bordado");
    const querySnapshot=await getDocs(collection(firestore,`${tipo}`));
    
    const alldocs= querySnapshot.forEach((element)=>{
     // console.log(`Document ${element.id} contiene ${JSON.stringify(element.data())}`);
     datos.push(element.data());
    });
    return datos;
  }
  //getAllDocument();