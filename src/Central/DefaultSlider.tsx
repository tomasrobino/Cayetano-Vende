import { useState } from "react";
import { Input, Slider } from "@mui/material";
import React from "react";

function valuetext(value: number) {
    return "${value}+100";
}

function DefaultSlider(props) {
    const [value, setValue] = useState([0, 30000]);
    
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    
    return(
        <>
            <Slider
                value={value}
                onChange={handleSliderChange}
                valueLabelDisplay="on"
                min={0}
                max={30000}
            />
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p>$</p>
                    <Input
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            let aux=parseInt(event.target.value);

                            if(aux<value[1]) {
                                setValue([aux,value[1]])}
                            }
                        }
                        className="input1"
                        value={value[0]}
                        inputProps={{
                            inputMode: "numeric",
                            min: 0,
                            max: 30000,
                            
                        }}
                    />
                </div>
                <Input
                    className="input2"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue([value[0] , parseInt(event.target.value)])}
                    value={value[1]}
                    inputProps={{
                        min: 0,
                        type: 'number',
                    }}
                />
            </div>
        </>
    )
}

export default DefaultSlider;