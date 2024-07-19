import React, { useState, useEffect } from 'react';

const PlantForm = ({ onSubmit, plantToEdit }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (plantToEdit) {
      setName(plantToEdit.name);
    } else {
      setName('');
    }
  }, [plantToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{plantToEdit ? 'Editar Planta' : 'Adicionar Planta'}</h2>
      <div>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <button type="submit">{plantToEdit ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default PlantForm;
