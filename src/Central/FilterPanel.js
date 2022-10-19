import DefaultSlider from "./DefaultSlider";

function FilterPanel() {
    return (
        <div id="filterPanel">
            <h1>Filtros</h1>
            <h4 style={{textAlign: "left", margin: 30}}>Precio</h4>
            <DefaultSlider
                
            />
        </div>
    )
}

export default FilterPanel;