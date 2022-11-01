import productDatabase from "./productDatabase";

function ProductPanel(props) {
    let divArr=[];
    for(let i in productDatabase) {
        if (productDatabase[i].price >= props.priceFilter[0] && productDatabase[i].price <= props.priceFilter[1]) {
            divArr.push(<div className="div">
                ${productDatabase[i].price}
            </div>);
        }
    }

    return (
        <div id="productPanel">
            {divArr}
        </div>
    )
}

export default ProductPanel;