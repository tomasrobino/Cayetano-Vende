import { useState } from "react";

function SingleProductPanel(props) {
	const [source, setSource] = useState(props.currentProd.imgs.main);
	const [count, setCount] = useState(1);

	let imgs = [];
	

	for (let i in props.currentProd.imgs) {
		imgs.push(i);
	}

	function handleClick() {
		if (count === imgs.length) {
			setCount(1);
			setSource(props.currentProd.imgs.main);
		} else {
			let aux = count+1;
			setCount(aux);
			setSource(props.currentProd.imgs[imgs[count]]);
			console.log(imgs[count]);
		}
	}

	return (
		<div className="singleProductPanel">
			<div className="viewerDiv">
				<img className="productImage" src={source} onClick={handleClick}/>
			</div>
		</div>
	);
}

export default SingleProductPanel;