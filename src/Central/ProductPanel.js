import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
        let search = props.searchText.toLowerCase();

        if (
            search.split("").every(char => char === " ") || search === "" ||
            search.split(" ").some(ele => productDatabase[i].category.toLowerCase().includes(ele)) ||
            search.split(" ").some(ele => productDatabase[i].folder.toLowerCase().includes(ele)) ||
            search.split(" ").some(ele => productDatabase[i].productName.toLowerCase().includes(ele))
        ) {
            if (props.category==="all" || props.category===productDatabase[i].category) {  //Check for category filter
                if (productDatabase[i].price >= props.priceFilter[0] && productDatabase[i].price <= props.priceFilter[1]) { //Check for price filter
                    //Generation of component that displays each filtered product
                    divArr.push(
                        <Card sx={{ backgroundColor: "green", boxShadow: 5, borderRadius: 5 }} variant="outlined" className="productDiv" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={event => handleClick(event, productDatabase[i])}>
                            <CardActionArea sx={{ height: "inherit", display: "flex" }}>
                                <Box sx={{ width: "90%", height: "60%", display: "flex", alignSelf: "flex-start", borderRadius: 0, marginTop: 1.5, backgroundColor: "white" }}>
                                    <CardMedia
                                        className="aaa"
                                        component="img"
                                        image={productDatabase[i].imgs.main}
                                        sx={{borderRadius: 0, alignSelf: "center"}}
                                    ></CardMedia>
                                </Box>
                                <CardContent className="productInfoDiv">
                                    <Typography>{productDatabase[i].productName}</Typography>
                                    <Typography>${productDatabase[i].price}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
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