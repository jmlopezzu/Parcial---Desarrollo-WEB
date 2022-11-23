function actualizarAsignatura(id){
  window.open("actualizar.html?id="+id);
}

function mostrarAsignaturas(){
  let videojuegos = document.getElementById("asignaturas");
  let endPoint = 'http://127.0.0.1:8000/api/asignaturas';

  asignaturas.innerHTML = '';
  fetch(endPoint)
  .then(response => response.json())
  .then(data => {
    //console.log(data); 
    data.forEach(element => {
      asignaturas.innerHTML += `
      <tr>
      <td>${element.id}</td>
      <td>${element.nombre}</td>
      <td>${element.creditos}</td>
      <td>${element.intensidadh}</td>
      <td>${element.carrera}</td>
      <td>
        <button class="btn btn-danger" onclick="eliminarAsignatura(${element.id})">Eliminar</button>
        <button class="btn waves-effect waves-light" onclick="actualizarAsignatura(${element.id})">Actualizar</button>
      </td>
    </tr>
      `;
    });
  }); 
}