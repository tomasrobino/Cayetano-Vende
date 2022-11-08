import { useState } from "react";

import FilterPanel from "./Central/FilterPanel"
import ProductPanel from "./Central/ProductPanel.js"

function Central() {
    const [priceFilter, setPriceFilter] = useState([0, 5000]);
    const [category, setCategory] = useState("all");

    return (
        <div id="main">
            <FilterPanel priceFilter={priceFilter} setPriceFilter={setPriceFilter} category={category} setCategory={setCategory}/>
            <ProductPanel priceFilter={priceFilter} category={category}/>
        </div>
    )
}

export default Central