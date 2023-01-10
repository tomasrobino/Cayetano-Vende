import TextField from "@mui/material/textfield";

function SearchBar(props) {
    function handleChange(event) {
        let value = event.target.value;
        props.setSearchText(value);
    }

    return (
        <div id="search">
            <TextField label="Buscar" onChange={handleChange}/>
        </div>
    )
}

export default SearchBar;