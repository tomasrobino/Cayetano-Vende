function SingleProductPanel(props) {
	return (
		<div className="singleProductPanel">
		    <img className="productImage" src={props.currentProd.imgs.main}/>
		</div>
		);
}

export default SingleProductPanel;