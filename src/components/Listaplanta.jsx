import React from 'react';

const PlantList = ({ plants, onEdit, onDelete }) => {
  return (
    <div className="PlantList">
      <h2>Lista de Plantas</h2>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            {plant.name}
            <div>
              <button onClick={() => onEdit(index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;
