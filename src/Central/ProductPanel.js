import productDatabase from "./productDatabase";

function ProductPanel(props) {
    let divArr=[];

    for(let i in productDatabase) { //Loops through all products
        if (props.category=="all" || props.category===productDatabase[i].category) {  //Check for category filter
            if (productDatabase[i].price >= props.priceFilter[0] && productDatabase[i].price <= props.priceFilter[1]) { //Check for price filter
                divArr.push(<div className="div">
                    ${productDatabase[i].price}
                </div>);
            }
        }
    }

    return (
        <div id="productPanel">
            {divArr}
        </div>
    )
}

export default ProductPanel;