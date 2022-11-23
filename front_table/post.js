function guardar(){
  var endPoint = 'http://127.0.0.1:8000/api/asignaturas';
  const form = document.getElementById('formulario');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const play = new FormData(form);
    fetch(endPoint, {
      method: 'POST',
      body: play
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  });
location.reload();
}