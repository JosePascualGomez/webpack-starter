import '../css/componentes.css'
//import logo from '../assets/img/webpack-logo.png'


export const saludar =(nombre='Sin Nombre') =>{
    console.log('Creando etiquetas h1');

    const h1 = document.createElement('h1');
    h1.innerText =`Hola.., ${nombre}`;
    document.body.append(h1);

    //img
    //console.log(logo)
    //const img = document.createElement('img');
    //img.src =logo;
    //document.body.append(img);
}