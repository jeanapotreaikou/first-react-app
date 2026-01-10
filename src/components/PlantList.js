import { plantList } from "../datas/plantList";
import CareScale from "./CareScale";

function PlantList() {
	/**
	 * Extrait les catégories uniques de la liste des plantes.
	 * Utilise la méthode reduce pour parcourir plantList et construire un tableau
	 * contenant chaque catégorie une seule fois (sans doublons).
	 * @type {string[]}
	 */
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<div>
						<li key={plant.id}>
							{plant.name} 
							{plant.isBestSale && plant.category === "classique" && <span>💕</span>} 
							{plant.isSpecialOffer && <span>En Promo !🔥</span>}
						</li>
						<CareScale careType='light' scaleValue={plant.light} />
						<CareScale careType='water' scaleValue={plant.water} />
					</div>

				))}
			</ul>
		</div>
	)
}

export default PlantList