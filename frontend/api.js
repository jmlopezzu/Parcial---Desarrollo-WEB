function consumirAPI(){
  var nombre = [];
  var creditos = [];
  var intensidadh = [];
  var carrera = [];

  // Consumo de la API
  fetch('http://127.0.0.1:8000/api/asignaturas')

  // Then necesita una promesa, y esa promesa se resuelve con una respuesta
  .then(respuesta_exitosa => respuesta_exitosa.json())
  .then(function(datos_obtenidos){
    datos_obtenidos.forEach(elemento => {
      if(elemento.nombre != undefined && elemento.creditos != undefined &&
        elemento.intensidadh != undefined
        && elemento.carrera!= undefined) {
          nombre.push(elemento.nombre);
          creditos.push(elemento.creditos);
          intensidadh.push(elemento.intensidadh);
        carrera.push(elemento.carrera);
        }
    });

    // variables para las gráficas

    var graf1 = {
      y: creditos,
      x: nombre,
      name: 'Asignatura',
      type: 'bar'
    };

    var graf2 ={
      y: nombre,
      x: carrera,
      name: 'Carrera',
      type: 'bar'
    };

    var graf3 ={
      y: intensidadh,
      x: nombre,
      name: 'IntensidadH',
      type: 'bar'
    };

    var graf4 ={
      y: creditos,
      x: carrera,
      name: 'creditos acum',
      type: 'bar'
    };

    var datosGraficas = [graf1,graf2,graf3,graf4];

    var layout = {
      barmode: 'stack',
      title: {
        text: 'Asignaturas .. jmlz',
      },

    };
    Plotly.newPlot('grafico',datosGraficas, layout);;
  });
}
consumirAPI();