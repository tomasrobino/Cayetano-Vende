import DoubleSlider from "./DoubleSlider.tsx";

function FilterPanel() {
    return (
        <div id="filterPanel">
            <h1>Filtros</h1>
            <div className="sliderPack">
                <h4 className="filterSubtitle">Precio</h4>
                <DoubleSlider/>
            </div>
        </div>
    )
}

export default FilterPanel;