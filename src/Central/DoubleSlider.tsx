import { useState } from "react";
import { Slider } from "@mui/material";
import React from "react";

function DefaultSlider(props) {
    const [value, setValue] = useState([0, 5000]);
    
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (value[0]>value[1]) {
            const a=value[1];
            value[1]=value[0];
            value[0]=a;
        }
        setValue(newValue as number[]);
        
    };
    
    return(
        <>
            <Slider
                value={value}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
            />
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h5 className="sliderDisplay">
                    ${value[0]}
                </h5>
                <h5 className="sliderDisplay">
                    ${value[1]}
                </h5>
            </div>
        </>
    )
}

export default DefaultSlider;