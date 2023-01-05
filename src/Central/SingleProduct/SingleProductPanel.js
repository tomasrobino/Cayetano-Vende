import Viewer from "./Viewer";

function SingleProductPanel(props) {
	return(
		<div className="singleProductPanel">
			<Viewer imgs={props.currentProd.imgs}/>
		</div>
	)
}

export default SingleProductPanel;