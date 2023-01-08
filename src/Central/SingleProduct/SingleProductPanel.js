import Viewer from "./Viewer";
import ProdSpecs from "./ProdSpecs";

function SingleProductPanel(props) {
	return(
		<div className="singleProductPanel">
			<Viewer imgs={props.currentProd.imgs}/>
			<ProdSpecs currentProd={props.currentProd} className="prodSpecs"/>
		</div>
	)
}

export default SingleProductPanel;