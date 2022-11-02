import CategoriesFilter from "./CategoriesFilter.tsx";
import DoubleSlider from "./DoubleSlider.tsx";

function FilterPanel(props) {
    return (
        <div id="filterPanel">
            <h1>Filtros</h1>
            <div className="sliderPack">
                <h4 className="filterSubtitle">Precio</h4>
                <DoubleSlider priceFilter={props.priceFilter} setPriceFilter={props.setPriceFilter}/>
            </div>
            <CategoriesFilter category={props.category} setCategory={props.setCategory}/>
        </div>
    )
}

export default FilterPanel;