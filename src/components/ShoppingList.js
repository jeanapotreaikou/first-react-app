import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem";

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ];

function ShoppingList() {
    return (
        <ul className='lmj-plant-list'>
            {plantList.map(
                ({ id, cover, name, water, light }) => (
                    <PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
                )
            )}
        </ul>
    )
}

export default ShoppingList