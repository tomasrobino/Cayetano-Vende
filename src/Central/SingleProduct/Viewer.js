import { useState } from "react";

function Viewer(props) {
	const [source, setSource] = useState(props.imgs.main);
	const [count, setCount] = useState(1);

	let imgs = [];

	for (let i in props.imgs) {
		imgs.push(i);
	}

	function handleClick() {
		if (count === imgs.length) {
			setCount(1);
			setSource(props.imgs.main);
		} else {
			setCount(count+1);
			setSource(props.imgs[imgs[count]]);
			console.log(imgs[count]);
		}
	}

	return (
		<div className="viewerDiv">
			<img className="productImage" src={source} onClick={handleClick} alt=""/>
		</div>
	);
}

export default Viewer;