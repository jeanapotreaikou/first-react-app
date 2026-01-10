import { plantList } from "../datas/plantList";

function Promotion() {
    const promotionalPlants = plantList.filter(plant => plant.isSpecialOffer);
    console.log(promotionalPlants);
    return promotionalPlants;
} 

export default Promotion;