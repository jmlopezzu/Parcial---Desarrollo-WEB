import React from 'react'
export default function formulario() {
  return (
    <div className='container'>
        <form>
            <legend>Disabled fieldset example</legend>
            <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Pelicula</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="nombre"/>
            </div>
            <div class="mb-3">
            <label for="disabledSelect" class="form-label">desscripcion</label>
            <input type='text'id="disabledTextInput" class="form-control" placeholder='descripcion'/>
            </div>
            <div class="mb-3">
                <label for="disabledSelect" class="form-label">valor</label>
                <input type='text'id="disabledTextInput" class="form-control"placeholder='valor'/>
            </div>
            <div class="mb-3">
                <label for="disabledSelect" class="form-label">director</label>
                <input type='text'id="disabledTextInput" class="form-control" placeholder='director'/>
            </div>
            <div class="mb-3">
                <label for="disabledSelect" class="form-label">fecha</label>
                <input type='date'id="disabledTextInput" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Enciar</button>
        </form>
     </div>
  )
}
