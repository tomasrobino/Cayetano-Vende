import productDatabase from "./productDatabase";

function ProductPanel(props) {
    let dataArr=[[],[]];
    let divArr=[];
    for(let i in productDatabase) { //Loops through all products
        if (props.category==="all" || props.category===productDatabase[i].category) {  //Check for category filter
            if (productDatabase[i].price >= props.priceFilter[0] && productDatabase[i].price <= props.priceFilter[1]) { //Check for price filter
                
                //dataArr[0].push(productDatabase[i].productName)
                
                divArr.push(<div className="div">
                    {productDatabase[i].productName}
                    <img src={productDatabase[i].imgs.main} className="image"/>
                </div>);


                //displayedArr.push(productDatabase[i]);
                
            }
        }
    }
/*
    for(let i in imgGroupArr) {
        divArr.push(<div className="div">
            {dataArr[0][i]}
            <img src={imgGroupArr[i].main} className="image"></img>
        </div>);
    }
*/


    return (
        <div id="productPanel">
            {divArr}
        </div>
    )
}

export default ProductPanel;