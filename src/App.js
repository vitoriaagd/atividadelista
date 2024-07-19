import React, { useState } from 'react';
import PlantList from './components/Listaplanta';
import PlantForm from './components/Planta';
import './App.css';

const App = () => {
  const [plants, setPlants] = useState([]);
  const [plantToEdit, setPlantToEdit] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEditPlant = (plant) => {
    if (plantToEdit) {
      const updatedPlants = plants.map((p, index) => (index === editIndex ? plant : p));
      setPlants(updatedPlants);
      setPlantToEdit(null);
      setEditIndex(null);
    } else {
      setPlants([...plants, plant]);
    }
  };

  const handleEditPlant = (index) => {
    setPlantToEdit(plants[index]);
    setEditIndex(index);
  };

  const handleDeletePlant = (index) => {
    const updatedPlants = plants.filter((_, i) => i !== index);
    setPlants(updatedPlants);
  };

  return (
    <div className="App">
      <h1>Lista de Plantas para cuidar</h1>
      <PlantForm onSubmit={handleAddOrEditPlant} plantToEdit={plantToEdit} />
      <PlantList plants={plants} onEdit={handleEditPlant} onDelete={handleDeletePlant} />
    </div>
  );
};

export default App;
