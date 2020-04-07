import '../css/componentes.css';

export const saludar = () =>{
    console.log('Creando etiqueta 1');

    const h2 = document.createElement('h2');
    h2.innerText = `Configuración inicial de Webpack para una app JS`;
    document.body.append(h2);
}