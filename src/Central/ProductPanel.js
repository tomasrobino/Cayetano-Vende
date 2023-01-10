import { useState } from "react";
import productDatabase from "./productDatabase";

import SingleProductPanel from "./SingleProduct/SingleProductPanel";

function ProductPanel(props) {
    const [visible, setVisible] = useState(true);
    const [currentProd, setCurrentProd] = useState({});

    function handleClick(_event,product) {
        if(visible) {
            setCurrentProd(product);
        }
        setVisible(!visible);
    }

    function handleMouseEnter(event) {
        event.currentTarget.style.backgroundColor="blue";
    }

    function handleMouseLeave(event) {
        event.currentTarget.style.backgroundColor="green";
    }
    
    let divArr=[];
    for(let i in productDatabase) { //Loops through all products

        if (props.searchText === "." || props.searchText === " " || props.searchText === "" ||
            productDatabase[i].category.toLowerCase().includes(props.searchText.toLowerCase()) ||
            productDatabase[i].folder.toLowerCase().includes(props.searchText.toLowerCase()) ||
            productDatabase[i].productName.toLowerCase().includes(props.searchText.toLowerCase())
        ) {
            if (props.category==="all" || props.category===productDatabase[i].category) {  //Check for category filter
                if (productDatabase[i].price >= props.priceFilter[0] && productDatabase[i].price <= props.priceFilter[1]) { //Check for price filter
                    //Generation of component that displays each filtered product
                    divArr.push(
                        <div className="productDiv" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={event => handleClick(event, productDatabase[i])}>
                            <div className="productImageDiv">
                                <img src={productDatabase[i].imgs.main} className="image" alt=""/>
                            </div>
                            <div className="productInfoDiv">
                                <h3>{productDatabase[i].productName}</h3>
                                <h3>${productDatabase[i].price}</h3>
                            </div>
                        </div>
                    );
                }
            }
        }
    }

    if(visible) {
        return (
            <div className="productPanel">
                {divArr}
            </div>
        )
    } else {
        return (<SingleProductPanel currentProd={currentProd}/>);
    }
}

export default ProductPanel;