import { useState } from "react";

import FilterPanel from "./Central/FilterPanel"
import ProductPanel from "./Central/ProductPanel"

function Central() {
    const [priceFilter, setPriceFilter] = useState([0, 5000]);

    return (
        <div id="main">
            <FilterPanel priceFilter={priceFilter} setPriceFilter={setPriceFilter}/>
            <ProductPanel priceFilter={priceFilter}/>
        </div>
    )
}

export default Central