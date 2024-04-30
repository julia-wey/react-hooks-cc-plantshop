import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [plants, setPlants] = useState([])

  const [searchPlant, setSearchPlant] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((data) => setPlants(data))
}, []);

  const searchedPlants = plants.filter((plant) => {
    return (plant.name.toLowerCase().includes(searchPlant.toLowerCase()))
})

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search setSearchPlant={setSearchPlant}/>
      <PlantList plants = {searchedPlants}/>
    </main>
  );
}

export default PlantPage;
