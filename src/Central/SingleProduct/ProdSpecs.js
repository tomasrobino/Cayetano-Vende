function ProdSpecs(props) {
	let price = "Precio: $";
	price+=props.currentProd.price;

	let category = "Categoría: ";
	category+=props.currentProd.category;

	return (
		<>
			<h4 className="prodSpecsText">{price}</h4>
			<h4 className="prodSpecsText">{category}</h4>
		</>
	)
}

export default ProdSpecs;