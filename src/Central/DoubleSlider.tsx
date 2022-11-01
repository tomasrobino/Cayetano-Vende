import { Slider } from "@mui/material";
import React from "react";

function DefaultSlider(props) {
    
    
    const handleSliderChange = (event: Event, newPriceFilter: number | number[]) => {
        if (props.priceFilter[0]>props.priceFilter[1]) {
            const a=props.priceFilter[1];
            props.priceFilter[1]=props.priceFilter[0];
            props.priceFilter[0]=a;
        }
        props.setPriceFilter(newPriceFilter as number[]);
    };
    
    return(
        <>
            <Slider
                value={props.priceFilter}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
            />
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h5 className="sliderDisplay">
                    ${props.priceFilter[0]}
                </h5>
                <h5 className="sliderDisplay">
                    ${props.priceFilter[1]}
                </h5>
            </div>
        </>
    )
}

export default DefaultSlider;