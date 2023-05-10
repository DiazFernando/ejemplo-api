let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",agregar);

let pistas =[];

load();

async function load(){
    let respuesta = await fetch('/pista/pistas');
     pistas = await respuesta.json();
    mostrarPistas();
};

    async function agregar(){
    let pista ={
        "identificacion":parseInt(document.getElementById("identificador").value),
                "titulo":document.getElementById("titulo").value,
                "duracion": parseInt(document.getElementById("duracion").value),
                "interprete": document.getElementById("interprete").value,
                "fecha": document.getElementById("fecha").value
    }

    let respuesta = await fetch('pista/agregar',{
        method: 'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(pista)
    });

    if(respuesta.text == "ok"){

        mostrarPistas();
    }
}

function mostrarPistas(){
    let html="";
    for (let pista of pistas){
        html+=`
        <tr>
            <td> ${pista.identificador}<td>
            <td> ${pista.titulo}<td>
            <td> ${pista.duracion}<td>
            <td> ${pista.interprete}<td>
            <td> ${pista.fecha}<td>
        <tr>    
        `;
    }
    document.getElementById("tbPistas").innerHTML = html;
}