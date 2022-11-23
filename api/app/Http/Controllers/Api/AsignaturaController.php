<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Asignatura;

class AsignaturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $asignaturas = Asignatura::all();
        return $asignaturas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $asignatura = new Asignatura();
        $asignatura->nombre = $request->nombre;
        $asignatura->creditos = $request->creditos;
        $asignatura->intensidadh = $request->intensidadh;
        $asignatura->carrera = $request->carrera;

        $product->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $asignatura = Asignatura::find($id);
       return $asignatura;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $asignatura = Asignatura::findOrFail($request->id);
        $asignatura->nombre = $request->nombre;
        $asignatura->creditos = $request->creditos;
        $asignatura->intensidadh = $request->intensidadh;
        $asignatura->carrera = $request->carrera;

        $asignatura->save();
        return $asignatura;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $asignatura = Asignatura::destroy($id);
        return $asignatura;
    }
}
