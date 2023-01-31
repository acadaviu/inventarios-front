import React from 'react'
import { Link } from 'react-router-dom';

export const InventarioCard = (prosps) => {

    const { inventario } = prosps;

  return (
    <div className="col">
    <div className="card">
      <img src={inventario.foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Caracteristicas</h5>
        <hr />
        <p className="card-text">{`Serial: ${inventario.serial}`}</p>
        <p className="card-text">{`Marca: ${inventario.marca.nombre}`}</p>
        <p className="card-text">{`Usuario: ${inventario.usuario.nombre}`}</p>
        <p className="card-text">
          <Link to={`invemtarios/edit/${inventario._id}`}>Ver Mas...</Link>
        </p>
      </div>
    </div>
  </div>
  )
}
