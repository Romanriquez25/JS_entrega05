
let input = document.getElementById("input");
let btnAgregar = document.querySelector(".form__button");
let total = document.getElementById("total");
let tarea = document.getElementById("tarea");
let tbody = document.getElementById("tbody");
let id =document.getElementById("id");
let nCompletadas = 0;
let sumaTotal = 3;

id = Date.now();

let arreglo = [{
    id: id+1,
    tarea: "Hacer la tarea",
    completado: false,},
    {
    id:id+2,
    tarea: "Hacer la tarea",
    completado: false},
    {
        id:id+3,
        tarea: "Hacer la tarea",
        completado: false}
];

renderRows(arreglo);


function renderRows(arreglo) {
    tbody.innerHTML = "";
    
    id = Date.now();
    arreglo.forEach((arreglo) => {
        let textoCompletado = arreglo.completado ? `<span style="background-color: green; color: white;">Completado</span>` : `<span style="background-color: red; color: white;">No completado</span>`;
       tbody.innerHTML += `<tr>
       <td>${arreglo.id}</td>
       <td>${arreglo.tarea}</td>
       <td id="contenedorTexto">${textoCompletado}</td>
       <td><button id="completar" data-id="${arreglo.id}" onclick="completar(${arreglo.id})">Completar</button></td>
       <td><button id="borrar" data-id="${arreglo.id}" onclick="borrar(${arreglo.id})">Eliminar</button></td>
       </tr>`;
    });
    total.innerHTML ="TOTAL:   " + sumaTotal;
}

btnAgregar.addEventListener("click", function () {
    
    if (input.value == "") {
        alert("No puedes agregar un valor vacio");
    } else {
        arreglo.push(
            {   
                id: id,
                tarea: input.value,
                completado: false,
            }
        );

        renderRows(arreglo);
                input.value = "";
                sumaTotal++;
                total.innerHTML = "TOTAL: " + sumaTotal;
        }

});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (input.value === "") {
            alert("No puedes agregar un valor vacío");
        } else {
            id = Date.now();
            arreglo.push({
                id: id,
                tarea: input.value,
                completado: false,
            });
            
            renderRows(arreglo);
            input.value = "";
            sumaTotal++;
            total.innerHTML = "TOTAL: " + sumaTotal;
        }
    }
});





function borrar(id) {
    arreglo = arreglo.filter((arreglo) => arreglo.id != id);
    arreglo.splice(id, 1);
    renderRows(arreglo);
            sumaTotal--;
            total.innerHTML = "TOTAL: " + sumaTotal;
            nCompletadas--; 
            if(nCompletadas<0){
               nCompletadas=0;}
            totalCompletadas.textContent = "Completadas " + nCompletadas; 
}



function completar(id) {
    var objIndex = arreglo.findIndex(obj => obj.id == id);
    if (objIndex !== -1) {
        if (arreglo[objIndex].completado) {
            arreglo[objIndex].completado = false;
            nCompletadas--; 
        } else {
            arreglo[objIndex].completado = true;
            nCompletadas++; 
        }
        renderRows(arreglo);
        totalCompletadas.textContent = "Completadas: " + nCompletadas ;
    }
}




