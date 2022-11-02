import React from "react";

function CategoriesFilter(props) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.setCategory(event.target.value);
    }

    return (
        <div className="sliderPack">
            <fieldset className="filterSubtitle">
                <legend>Categoría</legend>

                <div>
                    <input type="radio" name="categories" value="all" onChange={handleChange} defaultChecked/>
                    <label>Categoría 1</label>
                </div>
                <div>
                    <input type="radio" name="categories" value="2" onChange={handleChange}/>
                    <label>Categoría 2</label>
                </div>
                <div>
                    <input type="radio" name="categories" value="3" onChange={handleChange}/>
                    <label>Categoría 3</label>
                </div>
                <div>
                    <input type="radio" name="categories" value="4" onChange={handleChange}/>
                    <label>Categoría 4</label>
                </div>
                <div>
                    <input type="radio" name="categories" value="5" onChange={handleChange}/>
                    <label>Categoría 5</label>
                </div>
            </fieldset>
        </div>
    )
    
}

export default CategoriesFilter;